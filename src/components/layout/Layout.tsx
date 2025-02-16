import React from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className='mt-24'>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
