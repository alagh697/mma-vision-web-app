import Image from 'next/image'
import React from 'react'

function HomePageNewsListItem() {
  return (
    <li
    className='flex flex-col w-full'
    >
      <div
      className='relative w-full aspect-square'
      >
        <Image
        src={`/kongo.jpg`}
        fill
        alt='Kong vs Barry'
        className='object-cover'
        />
      </div>
      <div
      className='flex flex-col py-2 gap-2'
      >
        <strong
        className='font-medium text-[#2c75ff] uppercase text-xl'
        >
            {`Kongo vs Barry`}
        </strong>

        <p
        className='text-xs opacity-80'
        >
            {`Fight coverage.`}
        </p>
      </div>
    </li>
  )
}

export default HomePageNewsListItem
