import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Feature from 'components/homepage/Feature'
import Hero from 'components/homepage/Hero'
// import Pricing from 'components/homepage/Pricing'
import TechStack from 'components/homepage/TechStack'
// import Layout from 'components/layout/Layout'
import CommonPage from 'components/layout/Page'
// import SEOHead from 'components/seo'

type Props = {
  // Add custom props here
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <CommonPage title='Home' showBreadcrumbs={false}>
      <Hero />
      <Feature />
      <TechStack />
    </CommonPage>
  )
}

Home.requireAuth = false
export default Home
