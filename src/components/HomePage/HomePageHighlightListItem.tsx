"use client"
import Image from 'next/image'
import React from 'react'

function HomePageHighlightListItem({fight, selectedFight, setSelectedFight}: any) {
  console.log(selectedFight?.fightId)
  return (
    <li
    onClick={() => setSelectedFight(fight)}
    className={`hover-effect cursor-pointer flex gap-3 w-full flex-shrink-0 items-center
      ${selectedFight?.fightId === fight?.fightId && 'bg-white/10'}
      `}
    >
      <div
      className='h-24 aspect-video relative flex-shrink-0'
      >
      <Image
        src={fight?.poster}
        fill
        alt='Kong vs Barry'
        className='object-cover'
        />
      </div>

      <div
      className='flex flex-col gap-1'
      >
        <strong>
            {fight?.title}
        </strong>

        <span
        className='opacity-70 text-sm line-clamp-3'
        >
            {fight.description}
        </span>
      </div>
    </li>
  )
}

export default HomePageHighlightListItem
