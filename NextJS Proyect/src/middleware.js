import md5 from 'md5'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {

  const room = request.nextUrl.pathname.substring(1)

  const hasToken = request.cookies.has('token')

  if(!hasToken){
    return NextResponse.redirect(new URL(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_WEB_PORT}/login`))

  }

  try {

    const token = request.cookies.get('token').value

    const res = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_API_PORT}/exproom/${room}`, {
      headers: {
        "bearer": token
      }
    })

    const { exp } = await res.json()

    if (res.status === 200) {
      if (parseInt(exp) > new Date().getTime()) {
        return NextResponse.rewrite(new URL(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_WEB_PORT}/expired`))
      }
      else{
        const response =  NextResponse.next()
        response.cookies.set({
          name: 'sign',
          value: md5(`/live/${room}-${exp}-nodemediahls`),
          path: `/${room}`,
        })
        response.cookies.set({
          name: 'room-exp',
          value: exp,
          path: `/${room}`,
        })
        return response
      }
    }

    if(res.status === 401){
      return NextResponse.rewrite(new URL(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_WEB_PORT}/noroomaccess`))
    }

    if (res.status === 404) {
      return NextResponse.rewrite(new URL(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_WEB_PORT}/badcode`))
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })

  } catch (e) {
    console.log("ERROR AL CONSULTAR API")
    return NextResponse.next()
    //return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path((?:[A-Za-z0-9]{3}-){2}[A-Za-z0-9]{3})',
}