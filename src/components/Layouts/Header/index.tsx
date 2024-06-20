import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import SVG from 'react-inlinesvg';

function Header() {
  return (
    <header
    className='fixed top-0 left-0 w-full z-30 bg-gradient-to-b from-black/20 via-black/20 to-transparent backdrop-blur'
    >
      <div
      className='w-5/6 mx-auto flex justify-between py-4 items-center'
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

      <nav>
        <ul
        className='flex gap-6 items-center'
        >
          <li>
            <Link
            href={`/`}
            className='nav-link'
            >
            {`Live now`}
            </Link>
          </li>
          <li>
            <Link
            href={`/`}
            className='nav-link'
            >
            {`Live now`}
            </Link>
          </li>
          <li>
            <Link
            href={`/`}
            className='nav-link'
            >
            {`Live now`}
            </Link>
          </li>
          <li>
            <Link
            href={`/`}
            className='nav-link'
            >
            {`Live now`}
            </Link>
          </li>
        </ul>
      </nav>

      <div
      className='bg-white/20 backdrop-blur border border-white/20 rounded-full flex'
      >
        <div
        className='w-64 pl-3 flex items-center '
        >
          <span className='opacity-70'>
            {`Search`}
          </span>
        </div>
        <MagnifyingGlassIcon className='w-8 p-1 border rounded-r-full border-white/20'/>
      </div>

      <div
      className='flex gap-3 '
      >
        <div
        className='relative w-12 h-12 rounded-xl overflow-hidden shadow shadow-white/20'
        >
          <Image
          src={`/khabib.jpg`}
          fill
          className='object-cover'
          alt=''
          />
        </div>
        <ChevronDownIcon className='w-6'/>
      </div>
      </div>
    </header>
  )
}

export default Header
