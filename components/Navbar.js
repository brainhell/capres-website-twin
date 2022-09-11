/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

import { Image } from 'next/future/image'
import logo from '../public/capres.jpg'
import Link from 'next/link'
import { NavLinks as links } from './../components/NavLinks'

export default function NavBar() {
  const [navbar, setNavbar] = useState(false)
  const css = { width: '48px', height: '48px' }

  return (
    <nav className="fixed  font-header font-medium w-full bg-blue-500 z-20 ">
      <div className="justify-between px-3 sm:px-4 mx-auto lg:max-w-7xl md:items-center flex flex-col md:flex-row md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 lg:py-3 lg:block">
            <Link href="/">
              <a>
                <img
                  src="http://localhost:3000/capres.jpg"
                  alt=""
                  className="h-16 w-auto"
                />
              </a>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-50 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {links.map((link) => {
                return (
                  <li
                    className="text-white hover:text-indigo-200"
                    key={link.name}
                  >
                    <Link href={link.href}>
                      <a onClick={() => setNavbar(!navbar)}>{link.name}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="mt-3 space-y-2 md:hidden sm:inline-block">
              <Link href="/login">
                <a
                  className="inline-block w-full px-4 py-2 text-center text-white bg-blue-600 rounded-md shadow hover:bg-blue-800"
                  onClick={() => setNavbar(!navbar)}
                >
                  Log in
                </a>
              </Link>
              <Link href="/registroprueba">
                <a
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-blue-100"
                  onClick={() => setNavbar(!navbar)}
                >
                  Registro
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <Link href="/login">
            <a className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-800">
              Login
            </a>
          </Link>
          <Link href="/registroprueba">
            <a className="w-full px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-blue-100">
              Registro
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
