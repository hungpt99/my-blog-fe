import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React, { useMemo } from 'react'
import Typewriter from 'typewriter-effect'

import ScrollAnimationWrapper from 'components/layout/ScrollAnimationWrapper'
import ButtonPrimary from 'components/ui/button/ButtonPrimary'
import { getScrollAnimation } from 'utils/getScrollAnimation'

const listInfo = [
  { name: 'Experience', number: '3', icon: '/assets/icons/template/heroicons_sm-user.svg' },
  { name: 'Certificate', number: '2', icon: '/assets/icons/template/heroicons_academic-cap.svg' },
  { name: 'Project', number: '5', icon: '/assets/icons/template/bx_bxs-server.svg' },
]

const HeroText = () => {
  const { t } = useTranslation('common')
  return (
    <div className='row-start-2 flex flex-col items-start justify-center sm:row-start-1'>
      <h1 className='text-[60px] font-extrabold leading-[60px] text-black'>
        <strong>{t('Hi, I am Hung')}</strong>
      </h1>
      <p className='text-[60px] font-extrabold leading-[60px] text-template-orange-500'>
        <Typewriter
          options={{
            strings: ['Full Stack Developer'],
            autoStart: true,
            loop: true,
            delay: 100, // Adjust typing speed here
          }}
        />
      </p>
      <p className='mb-6 mt-4 text-template-black-500'>
        {t(
          'I am a Back-End / Full-Stack Developer. I am currently working at SHB-Finance Technologies as a Back-End Developer.'
        )}
      </p>
      <ButtonPrimary>{t('Contact')}</ButtonPrimary>
    </div>
  )
}

const HeroImage: React.FC<{ scrollAnimation: Record<string, any> }> = ({ scrollAnimation }) => (
  <div className='flex w-full'>
    <motion.div className='h-full w-full' variants={scrollAnimation}>
      <Image
        src='/assets/images/Illustration1.png'
        alt='VPN Illustration'
        quality={100}
        width={612}
        height={383}
      />
    </motion.div>
  </div>
)

const UserStats: React.FC<{ scrollAnimation: Record<string, any> }> = ({ scrollAnimation }) => (
  <ScrollAnimationWrapper className='z-10 grid w-full grid-flow-row grid-cols-1 divide-y-2 divide-template-gray-100 rounded-lg bg-template-white-500 py-9 sm:grid-flow-row sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0'>
    {listInfo.map((info, index) => (
      <motion.div
        className='mx-auto flex w-8/12 items-center justify-start px-4 py-4 sm:mx-0 sm:w-auto sm:justify-center sm:py-6'
        key={index}
        custom={{ duration: 2 + index }}
        variants={scrollAnimation}
      >
        <div className='mx-auto flex w-40 sm:w-auto'>
          <div className='mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-template-orange-100'>
            <img src={info.icon} className='h-6 w-6' alt={info.name} />
          </div>
          <div className='flex flex-col'>
            <p className='text-xl font-bold text-template-black-600'>{info.number}</p>
            <p className='text-lg text-template-black-500'>{info.name}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </ScrollAnimationWrapper>
)

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  return (
    <div className='container mx-auto px-8 xl:px-16' id='about'>
      <ScrollAnimationWrapper>
        <motion.div
          className='grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col sm:grid-cols-2 sm:py-16 md:grid-rows-1'
          variants={scrollAnimation}
        >
          <HeroText />
          <HeroImage scrollAnimation={scrollAnimation} />
        </motion.div>
      </ScrollAnimationWrapper>
      <div className='relative flex w-full'>
        <UserStats scrollAnimation={scrollAnimation} />
        <div
          className='roudned-lg absolute left-0 right-0 top-0 mx-auto mt-8 h-64 w-11/12 bg-template-black-600 opacity-5 sm:h-48'
          style={{ filter: 'blur(114px)' }}
        />
      </div>
    </div>
  )
}

export default Hero
