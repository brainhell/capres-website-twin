import { LayoutContainer } from './AppStyles'
import Footer from './Footer'
import Navbar from './Navbar'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  const showNavbarFooter =
    router.pathname === '/login' ||
    router.pathname === '/registro' ||
    router.pathname === '/registroprueba'
      ? false
      : true
  return (
    <>
      <LayoutContainer>
        {showNavbarFooter && <Navbar />}
        <div className="">{children}</div>
        {showNavbarFooter && <Footer />}
      </LayoutContainer>
    </>
  )
}
