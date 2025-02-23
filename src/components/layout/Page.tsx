import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'

interface CommonPageProps {
  title: string
  children: React.ReactNode
  showBreadcrumbs?: boolean
}

const CommonPage: React.FC<CommonPageProps> = ({ title, children, showBreadcrumbs = true }) => {
  const router = useRouter()
  const pathSegments = router.asPath.split('/').filter((segment) => segment)

  return (
    <>
      <SEOHead title={title} />
      <Layout>
        <div className='container mx-auto px-4 py-6'>
          {/* Breadcrumbs */}
          {showBreadcrumbs && (
            <Breadcrumb className='mb-4'>
              <Breadcrumb.Item>
                <Link href='/' passHref>
                  <HomeOutlined /> Home
                </Link>
              </Breadcrumb.Item>
              {pathSegments.map((segment, index) => {
                const url = `/${pathSegments.slice(0, index + 1).join('/')}`
                return (
                  <Breadcrumb.Item key={url}>
                    <Link href={url} passHref>
                      {decodeURIComponent(segment.replace(/-/g, ' '))}
                    </Link>
                  </Breadcrumb.Item>
                )
              })}
            </Breadcrumb>
          )}
          {children}
        </div>
      </Layout>
    </>
  )
}

export default CommonPage
