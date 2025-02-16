import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React, { useMemo } from 'react'

import ScrollAnimationWrapper from 'components/layout/ScrollAnimationWrapper'
import { getScrollAnimation } from 'utils/getScrollAnimation'

const techStack = [
  {
    name: 'React',
    image: '/assets/icons/techstack/react.svg',
  },
  {
    name: 'Flutter',
    image: '/assets/icons/techstack/flutter.svg',
  },
  {
    name: 'Java',
    image: '/assets/icons/techstack/java.svg',
  },
  {
    name: 'Javascript',
    image: '/assets/icons/techstack/javascript.svg',
  },
  {
    name: 'Express.Js',
    image: '/assets/icons/techstack/express.svg',
  },
  {
    name: 'MongoDB',
    image: '/assets/icons/techstack/mongodb.svg',
  },
  {
    name: 'MySQL',
    image: '/assets/icons/techstack/mysql.svg',
  },
  {
    name: 'PostgreSQL',
    image: '/assets/icons/techstack/postgresql.svg',
  },
  {
    name: 'Typescript',
    image: '/assets/icons/techstack/typescript.svg',
  },
  {
    name: 'Docker',
    image: '/assets/icons/techstack/docker.svg',
  },
  {
    name: 'Gitlab',
    image: '/assets/icons/techstack/gitlab.svg',
  },
  {
    name: 'Kubernetes',
    image: '/assets/icons/techstack/kubernetes.svg',
  },
]

const TechStack = () => {
  const { t } = useTranslation('common')

  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div
      className='w-full bg-gradient-to-b from-template-white-300 to-template-white-500 py-14'
      id='techstack'
    >
      <div className='container mx-auto flex w-full flex-col justify-center px-8 text-center xl:px-16'>
        <div className='flex w-full flex-col'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='text-2xl font-medium leading-relaxed text-template-black-600 sm:text-3xl lg:text-4xl'
            >
              {t('My Tech Stack')}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='mx-auto my-2 w-10/12 text-center leading-normal sm:w-7/12 lg:w-6/12'
            >
              {t('The powerful tools and technologies i use to build amazing products.')}
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className='mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
              variants={scrollAnimation}
            >
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md'
                >
                  <div className='mb-3 flex items-center justify-center rounded-full bg-white p-3 shadow-sm'>
                    <Image src={tech.image} alt={tech.name} width={60} height={60} />
                  </div>
                  <p className='mt-2 text-center text-template-black-600'>{tech.name}</p>
                </div>
              ))}
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  )
}

export default TechStack
