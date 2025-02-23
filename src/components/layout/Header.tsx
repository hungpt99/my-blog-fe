import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

import { NAV_ITEMS } from '../../constants/common.constant'

const Header = () => {
  const [activeLink, setActiveLink] = useState('')
  const [scrollActive, setScrollActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollActive(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 z-30 w-full bg-template-white-500 transition-all ${
          scrollActive ? 'pt-0 shadow-md' : 'pt-4'
        }`}
      >
        <nav className='container mx-auto grid grid-flow-col px-8 py-3 sm:py-4 xl:px-16'>
          <Link href='/' className='col-start-1 col-end-2 flex items-center'>
            <Image
              src='/assets/images/Logo.svg'
              alt='Logo'
              height={30}
              width={100}
              className='h-8 w-auto'
            />
            <span className='ml-4 text-xl font-bold text-template-black-500'>LowkeyDev</span>
          </Link>
          {/* Move the nav items to the right */}
          <ul className='col-start-4 col-end-8 ml-auto hidden items-center text-template-black-500 lg:flex'>
            {NAV_ITEMS.map(({ id, label, href }) => (
              <li key={id} className='relative mx-2 inline-block'>
                <Link href={`${href}`}>
                  <button
                    type='button' // Explicit type for button
                    onClick={() => setActiveLink(id)}
                    className={`animation-hover cursor-pointer px-4 py-2 ${
                      activeLink === id
                        ? 'animation-active text-template-orange-500'
                        : 'text-template-black-500 hover:text-template-orange-500'
                    }`}
                    aria-pressed={activeLink === id} // Provides accessibility info
                  >
                    {label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className='fixed bottom-0 left-0 right-0 z-20 px-4 shadow-t sm:px-8 lg:hidden'>
        <div className='bg-template-white-500 sm:px-3'>
          <ul className='flex w-full items-center justify-between text-template-black-500'>
            {NAV_ITEMS.map(({ id, label, href }) => (
              <li key={id} className='flex flex-col items-center'>
                <Link href={`${href}`}>
                  <button
                    type='button' // Explicit type for button
                    onClick={() => setActiveLink(id)}
                    className={`mx-1 flex flex-col items-center border-t-2 px-3 py-2 text-xs transition-all sm:mx-2 sm:px-4 ${
                      activeLink === id
                        ? 'border-template-orange-500 text-template-orange-500'
                        : 'border-transparent'
                    }`}
                    aria-pressed={activeLink === id} // Provides accessibility info
                  >
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    {label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
