import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}: any) {
  return (
    <html lang="en">
    <body className={`bg-[#111111] text-[#f1f1f1]`}>
        <Header/>
        <main
        className='min-h-screen flex flex-1 flex-col w-full'
        >
        {children}
        </main>
        
        <Footer/>
        </body>
  </html>
  )
}

export default Layout
