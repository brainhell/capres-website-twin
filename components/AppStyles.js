import tw, { styled, css } from 'twin.macro'

/* Layout Styles */
export const LayoutContainer = tw.div`
bg-gray-50
min-h-screen
w-full
flex
flex-col
relative
`
/* End Layout Styles */

export const Heading = tw.h1`
text-3xl
text-blue-500
font-bold
underline
`

/* Navbar Styles */
export const NavContainer = tw.nav`
flex
sm:flex-row
flex-col
w-full
h-20
bg-transparent
text-gray-500
text-lg
items-center
justify-between
px-10
py-4
md:py-0

`
/* export const NavContainer = tw.div`

` */
export const NavigationContainer = tw.div`
lg:px-16
px-6
bg-blue-500
flex
flex-wrap
items-center
lg:py-0
py-2
w-full
`
export const Nav = tw.nav`
sm:flex-row
flex-col
flex
items-center
px-2
`

export const LogoContainer = tw.div`

`
/* End Navbar Styles */
