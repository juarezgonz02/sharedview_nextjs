import md5 from 'md5'
import { NextResponse } from 'next/server'
import roomsMiddleware from "./Middlewares/RoomMiddleware"
import {sessionMiddleware, homePageSessionMiddleware} from "./Middlewares/sessionMiddleware"

export async function middleware(request) {

  if(request.nextUrl.pathname === "/"){
      return sessionMiddleware(request)
  }

  if(request.nextUrl.pathname === "/home"){
      return homePageSessionMiddleware(request)
  }

  if(request.nextUrl.pathname.match('(?:[A-Za-z0-9]{3}-){2}[A-Za-z0-9]{3}')){
      return roomsMiddleware(request)
  }

  return NextResponse.next()

}

