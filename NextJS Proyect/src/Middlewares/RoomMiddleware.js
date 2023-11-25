import {NextResponse} from "next/server";
import md5 from "md5";

const API_ENV_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}:${process.env.NEXT_PUBLIC_API_PORT}`

const WEB_ENV_URL = `${process.env.NEXT_PUBLIC_WEB_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_WEB_PORT}`

const fetchRoomExp = async (room_code, token) => {


    console.log("URL", `${API_ENV_URL}/room/${room_code}`)
    console.log("TOKEN", token)

    const res = await fetch(`${API_ENV_URL}/room/${room_code}`, {
        headers: {
            "bearer": token
        }
    })

    const data = await res.json()

    if(res.status !== 200) {
        return {exp: 0, status: res.status, isPublic: false}

    }

    return {
        exp: new Date(data.room.expirationDate).getTime(),
        status: res.status,
        isPublic: data.room.isPublic
    }


}

const generateResponseWithCookie = (room, exp) => {
    const response =  NextResponse.next()
    response.cookies.set({
        name: 'sign',
        value: md5(`/live/${room}-${exp}-${process.env.KEY}`),
        path: `/${room}`,
    })
    response.cookies.set({
        name: 'room-exp',
        value: exp,
        path: `/${room}`,
    })
    return response
}

const checkExpirationRoom = (room, exp) => {
    if (parseInt(exp) < new Date().getTime()) {
        return NextResponse.rewrite(new URL(`${WEB_ENV_URL}/expired`))
    }
    else{
        return generateResponseWithCookie(room, exp)
    }
}

const checkAccessToRoom = async (room, token, exp) => {

    const res = await fetch(`${API_ENV_URL}/room/status/${room}`, {
        headers: {
            "Authorization":
                `Bearer ${token}`
        }
    })

    if(res.status !== 401){
        return checkExpirationRoom(room, exp)
    }

    return NextResponse.rewrite(new URL(`${WEB_ENV_URL}/noroomaccess`))

}

const roomsMiddleware = async (request) => {

    const room = request.nextUrl.pathname.substring(1)

    const hasToken = request.cookies.has('token')

    if(!hasToken){
        return NextResponse.redirect(new URL(`${WEB_ENV_URL}/login`))
    }

    try {

        const token = request.cookies.get('token').value

        const { exp, status, isPublic } = await fetchRoomExp(room, token)

        if (status === 200) {

            if(isPublic){
                return checkExpirationRoom(room, exp)
            }else{
                return checkAccessToRoom(room, token, exp)
            }

        }

        if(status === 401){
            return NextResponse.rewrite(new URL(`${WEB_ENV_URL}/badcode`))
        }

        if (status === 404) {
            return NextResponse.rewrite(new URL(`${WEB_ENV_URL}/badcode`))
        }

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })

    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: 'Internal Server Error', details: e.message }, { status: 500 })
    }
}

export default roomsMiddleware