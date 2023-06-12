
import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

const AUTH_PAGES = ["/login", "register","/user/password-reset","/user/verify/","/user/password-forgot"]
const isAuthPages = (url:any)=>AUTH_PAGES.some((page:any)=>page.startsWith(url))

export function middleware(req: NextRequest) {
  const {cookies,nextUrl} =req
  // const token = req.cookies.get("token");
  const {value:token}  = cookies.get("token") ?? {value:null}
  const { pathname, origin } =nextUrl
  const isAuthPageRequested = isAuthPages(nextUrl.pathname)
  if (pathname.startsWith('/login') || 
      pathname.startsWith('/register') || 
      pathname.startsWith('/user/password-reset') || 
      pathname.startsWith('/user/verify/') || 
      pathname.startsWith('/user/password-forgot')) {
    if (token) {
      return NextResponse.redirect(`${origin}`)
    }
  }

  else if (pathname.startsWith(`${origin}`)) {
    if (!token) {
      return NextResponse.redirect(`${origin}/login`)
    }
    else {
      return NextResponse.next()
    }
  }

  return NextResponse.next()
}
