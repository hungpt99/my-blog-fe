import Image from 'next/image'
import React from 'react'

import { socialLinks } from '../../constants/common.constant'

const Footer = () => {
  return (
    <div className='bg-template-white-300 pb-4 pt-4'>
      <div className='container mx-auto flex flex-col items-center justify-between sm:flex-row sm:justify-between'>
        {/* Copyright */}
        <p className='mb-4 text-template-gray-400 sm:mb-0'>
          ©{new Date().getFullYear()} - LowKeyDev
        </p>

        {/* Social Links (aligned to the right) */}
        <div className='flex'>
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target='_blank' rel='noopener noreferrer'>
              <div className='mx-2 flex items-center justify-center rounded-full bg-template-white-500 p-2 shadow-md'>
                <Image
                  className='h-6 w-6'
                  src={link.image}
                  alt={link.name}
                  height={30}
                  width={30}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
