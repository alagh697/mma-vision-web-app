import Link from 'next/link'
import React from 'react'
import SVG from 'react-inlinesvg';
import FooterSiteMap from './FooterSiteMap';

function Footer() {
  return (
    <footer
    className='w-full bg-[#222222] '
    >
      <div
      className='w-5/6 mx-auto py-14 flex'   
      >
        <div
        className='flex flex-col gap-2 w-1/2'
        >
        <Link
      href={`/`}
      >
      <SVG
        src="/next.svg"
        width={128}
        height="auto"
        title="React"
        className='fill-white hover-effect'
      />
      </Link>
      <p className="   uppercase tracking-widest text-xs font-light">
          Copyright &copy;   {new Date().getFullYear().toString()} Ronindevo. 
            {' All rights reserved.'}
            </p>
        </div>
      

      <div
      className='flex justify-between w-1/2'
      >
        <FooterSiteMap/>
        <FooterSiteMap/>
        <FooterSiteMap/>
      </div>
      </div>
    </footer>
  )
}

export default Footer
