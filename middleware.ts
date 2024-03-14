export { default } from 'next-auth/middleware';

export const config = {
    // *: zero or more of any character
    // +: one or more of any character
    // ?: zero or one of any character
    matcher: ['/dashboard/:path*']
}