import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import CommonPage from 'components/layout/Page'

const ComingSoon: React.FC = () => {
  const { t } = useTranslation('common')

  const handleBackToHome = () => {
    window.location.href = '/'
  }

  return (
    <CommonPage title='Coming Soon' showBreadcrumbs={false}>
      <div className='flex h-screen items-center justify-center bg-template-white-500'>
        <div className='text-center'>
          <Image
            src='/assets/images/Logo.svg'
            alt='Logo'
            height={80}
            width={200}
            className='mx-auto'
          />
          <h1 className='mt-4 text-4xl font-bold text-template-black-500'>{t('COMING_SOON')}</h1>
          <p className='text-template-black-400 mt-2 text-lg'>{t('DESCRIPTION')}</p>
          <div className='mt-6'>
            <button
              type='button'
              onClick={handleBackToHome}
              className='hover:text-template-orange-600 text-template-orange-500'
            >
              {t('BACK_TO_HOME') || 'Back to Home'}
            </button>
          </div>
        </div>
      </div>
    </CommonPage>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

export default ComingSoon
