export function middleware(request){

}

//negative matching - telling the middleware to not run for these routes
export const config= {
   matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}

//positive matching - telling the middleware to run for these routes
//["/about","/contact"]