import Image from 'next/image'
import React from 'react'

function HomePageHighlightListItem() {
  return (
    <li
    className='hover-effect cursor-pointer flex gap-3 w-full flex-shrink-0 items-center'
    >
      <div
      className='h-24 aspect-video relative flex-shrink-0'
      >
<Image
        src={`/kongo.jpg`}
        fill
        alt='Kong vs Barry'
        className='object-cover'
        />

      </div>

      <div
      className='flex flex-col gap-1'
      >
        <strong>
            {`Kongo vs Barry`}
        </strong>

        <span
        className='opacity-70 text-sm'
        >
            {`June 26, 2011`}
        </span>
      </div>
    </li>
  )
}

export default HomePageHighlightListItem
