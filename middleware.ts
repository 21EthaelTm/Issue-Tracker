// middleware.js
export { default } from 'next-auth/middleware'
console.log('✅ Middleware file is loading...')
// Optional: Add matcher configuration
export const config = {
  matcher: [
    '/issues/new',
    '/issues/edit/:id+'
  ]
}