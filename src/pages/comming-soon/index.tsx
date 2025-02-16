import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React from 'react'

const ComingSoon: React.FC = () => {
  const { t } = useTranslation('common')

  const handleBackToHome = () => {
    window.location.href = '/'
  }

  return (
    <>
      <div className='flex h-screen items-center justify-center bg-template-white-500'>
        <div className='text-center'>
          <Image
            src='/assets/images/Logo.svg' // Replace with your logo image path
            alt='Logo'
            height={80}
            width={200}
            className='mx-auto'
          />
          <h1 className='mt-4 text-4xl font-bold text-template-black-500'>{t('comingSoon')}</h1>
          <p className='text-template-black-400 mt-2 text-lg'>{t('description')}</p>
          <div className='mt-6'>
            <button
              type='button'
              onClick={handleBackToHome} // Calling the function
              className='hover:text-template-orange-600 text-template-orange-500'
            >
              {t('backToHome')}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComingSoon
