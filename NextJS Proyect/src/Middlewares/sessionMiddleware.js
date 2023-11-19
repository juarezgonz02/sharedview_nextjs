import {NextResponse} from "next/server";

const ENV_URL = `${process.env.NEXT_PUBLIC_WEB_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_WEB_PORT}`

export const sessionMiddleware = async (request) => {

    if(request.cookies.has("token")){
        return NextResponse.redirect(ENV_URL+"/home")
    }

    return NextResponse.next()
}
export const homePageSessionMiddleware = async (request) => {


    if(!request.cookies.has("token")){
        return NextResponse.redirect(ENV_URL+"/login")
    }

    return NextResponse.next()
}

export const loggedMiddleware = (request) => {
    if(request.cookies.has("token")){
        return NextResponse.redirect(ENV_URL+"/home")
    }
}