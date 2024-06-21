import Link from 'next/link'
import React from 'react'

function HeaderNav() {
  return (
    <nav>
        <ul
        className='hidden lg:flex gap-6 items-center'
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
  )
}

export default HeaderNav
