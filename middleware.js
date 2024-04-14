import { NextResponse } from "next/server";

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/users')) {

        // validation
        return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/users", "/login"],
}