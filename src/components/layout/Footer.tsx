import Image from 'next/image'
import React from 'react'

import { socialLinks } from '../../constants/common.constant'

const Footer = () => {
  return (
    <footer className='mt-auto bg-template-white-300 py-4'>
      <div className='container mx-auto flex flex-wrap items-center justify-between px-4'>
        {/* Copyright */}
        <p className='text-template-gray-400'>&copy; {new Date().getFullYear()} - LowKeyDev</p>

        {/* Social Links */}
        <div className='flex space-x-3'>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={link.name}
              className='rounded-full bg-template-white-500 p-2 shadow-md transition hover:opacity-80'
            >
              <Image src={link.image} alt={link.name} height={24} width={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
