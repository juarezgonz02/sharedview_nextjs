import {NextResponse} from "next/server";
import md5 from "md5";

const ENV_URL = `${process.env.NEXT_PUBLIC_WEB_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_WEB_PORT}`

const fetchRoomExp = async (room, token) => {

    const res = await fetch(`${ENV_URL}:${process.env.NEXT_PUBLIC_API_PORT}/exproom/${room}`, {
        headers: {
            "bearer": token
        }
    })
    const {exp} = await res.json()

    return {exp: exp, status: res.status}
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

const roomsMiddleware = async (request) => {

    const room = request.nextUrl.pathname.substring(1)

    const hasToken = request.cookies.has('token')


    if(!hasToken){
        return NextResponse.redirect(new URL(`${ENV_URL}:${process.env.NEXT_PUBLIC_WEB_PORT}/login`))
    }

    try {

        const token = request.cookies.get('token').value

        const { exp, status } = await fetchRoomExp(room, token)

        if (status === 200) {
            if (parseInt(exp) > new Date().getTime()) {
                return NextResponse.rewrite(new URL(`${ENV_URL}:${process.env.NEXT_PUBLIC_WEB_PORT}/expired`))
            }
            else{
                return generateResponseWithCookie(room, exp)
            }
        }

        if(status === 401){
            return NextResponse.rewrite(new URL(`${ENV_URL}:${process.env.NEXT_PUBLIC_WEB_PORT}/noroomaccess`))
        }

        if (status === 404) {
            return NextResponse.rewrite(new URL(`${ENV_URL}:${process.env.NEXT_PUBLIC_WEB_PORT}/badcode`))
        }

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })

    } catch (e) {
        return NextResponse.json({ error: 'Internal Server Error', details: e.message }, { status: 500 })
    }
}

export default roomsMiddleware