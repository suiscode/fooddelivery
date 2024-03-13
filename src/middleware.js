import { NextResponse } from "next/server";

export const middleware = async(req) => {
  const token = req.cookies.get("cookie")?.value;
  const requestedUrl = new URL(req.url);
  if (
    (requestedUrl.pathname === "/login" ||
      requestedUrl.pathname === "/signup") &&
    token
  ) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/login", "/signup"],
};
