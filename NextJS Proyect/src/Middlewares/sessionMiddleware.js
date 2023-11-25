import {NextResponse} from "next/server";
import md5 from "md5";

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

export const clearCookies = () => {
    const response =  NextResponse.redirect(ENV_URL+"/")
    response.headers.set(
        'Set-Cookie',
        'token=; expires=Sun, 06 Nov 1994 08:49:37 GMT; path=/;'
    );

    return response
}