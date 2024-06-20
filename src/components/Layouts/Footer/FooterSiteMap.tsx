import Link from 'next/link'
import React from 'react'

function FooterSiteMap() {
  return (
    <div
        className='flex flex-col gap-4'
        >
          <h4
          className='text-xl font-bold'
          >
            {`Company`}
          </h4>

          <ul
          className='flex flex-col gap-2'
          >
            <li>
              <Link
              href={`/`}
              className='sitemap-link'
              >
              {`About`}
              </Link>
            </li>
            <li>
              <Link
              href={`/`}
              className='sitemap-link'
              >
              {`About`}
              </Link>
            </li>
            <li>
              <Link
              href={`/`}
              className='sitemap-link'
              >
              {`About`}
              </Link>
            </li>
            <li>
              <Link
              href={`/`}
              className='sitemap-link'
              >
              {`About`}
              </Link>
            </li>
          </ul>
        </div>
  )
}

export default FooterSiteMap
