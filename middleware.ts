import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPUblicRoute = createRouteMatcher([
    "/sign-in",
    "/sign-up",
    "/",
    "/home"
]);

const isPUblicApiRoute = createRouteMatcher(["/api/video"])



export default clerkMiddleware((auth, req)=>
{
    const {userId} = auth();
    const currentUrl = new URL (req.url)
    const isAccessingHome= currentUrl.pathname === "/home"
    const isApiRequest = currentUrl.pathname.startsWith("/api")
if(userId && isPUblicApiRoute(req) && !isAccessingHome)
{
    return NextResponse.redirect(new URL("/home", req.url))
}

// not log in 
if (!userId){
    if(!isPUblicRoute(req) && !isPUblicApiRoute(req)){
        return NextResponse.redirect(new URL("/sign-in", req.url))
    }
    if(isApiRequest && !isPUblicApiRoute(req)){
        return NextResponse.redirect(new URL("/sign-in", req.url))
    }
}
return NextResponse.next()

}
);

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};