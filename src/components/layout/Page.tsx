import React from 'react'

import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'

interface CommonPageProps {
  title: string
  children: React.ReactNode
}

const CommonPage: React.FC<CommonPageProps> = ({ title, children }) => {
  return (
    <>
      <SEOHead title={title} />
      <Layout>
        <div className='container mx-auto px-4 py-6'>{children}</div>
      </Layout>
    </>
  )
}

export default CommonPage
