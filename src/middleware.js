import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connectToDb } from "./app/api/utils";
import axios from "axios";
import jwt from "jsonwebtoken";


export const middleware = (req) => {
  const token = req.cookies.get("cookie")?.value;
  const requestedUrl = new URL(req.url);
  if (
    (requestedUrl.pathname === "/login" ||
      requestedUrl.pathname === "/signup") &&
    token
  ) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  const checkIfAdmin=async()=>{
    const response = await axios.post('/api/user')
    console.log(response);
  }
  
  if(requestedUrl.pathname === '/admin'){
    checkIfAdmin()
  }

  return NextResponse.next();
};






export const config = {
  matcher: ["/", "/login", "/signup", "/admin"],
};
