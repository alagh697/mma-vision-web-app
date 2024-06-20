import Image from 'next/image'
import React from 'react'

function HomePageLiveNowSlide() {
  return (
    <div
    className='flex flex-col w-72'
    >
      <div
      className='relative w-full aspect-video'
      >
        <Image
        src={`/kongo.jpg`}
        fill
        alt='Kong vs Barry'
        className='object-cover'
        />
      </div>
      <div
      className='bg-black flex justify-center py-2'
      >
        <strong
        className='font-medium'
        >
            {`Kongo vs Barry`}
        </strong>
      </div>
    </div>
  )
}

export default HomePageLiveNowSlide
