import Image from 'next/future/image'
import Link from 'next/link'
import { Nav, NavContainer, NavigationContainer } from './AppStyles'
import Logo from '../public/assets/images/capres.jpg'

const navlinks = [
  {
    name: 'Inicio',
    href: '/',
  },
  {
    name: 'Socios',
    href: '/socios',
  },
  {
    name: 'Servicios',
    href: '/servicios',
  },
  {
    name: 'Descargas',
    href: '/descargas',
  },
  {
    name: 'Contacto',
    href: '/contacto',
  },
]
export default function Navigation() {
  return (
    <>
      <NavContainer>
        <Link href="/">
          <a>
            <Image alt="Logo CAPRES" src={Logo} width="100" className="p-1" />
          </a>
        </Link>
        <Nav>
          <ul className="flex sm:items-start items-center sm:space-x-4 space-x-0 sm:flex-row flex-col">
            {navlinks.map((link) => {
              return (
                <li className="" key={link.name}>
                  <Link href={link.href}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Nav>
      </NavContainer>
    </>
  )
}
