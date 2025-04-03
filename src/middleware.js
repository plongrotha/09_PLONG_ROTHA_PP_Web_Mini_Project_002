import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(request) {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
