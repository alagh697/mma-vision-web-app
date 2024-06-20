import { BellIcon, PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'

function HomePageLiveNowTitle() {
  return (
    <div
    className='w-11/12 mx-auto'
    >
      <div
      className='flex flex-col gap-3 max-w-md'
      >
        <h2
        className='text-xl uppercase font-medium'
        >
            {`Live now`}
        </h2>
        <h3
        className='font-semibold uppercase text-4xl'
        >
            {`Kongo vs Barry`}
        </h3>

        <p>
            {`Thus, Kongo is heavily knocked down by a huge right hand from Pat Barry. In survival mode, the Frenchman experiences brief losses of consciousness but holds on despite numerous blows from the American. Eventually, Kongo gets back up… only to be knocked down again by another right hand from Pat Barry.`}
        </p>

        <div
        className='flex gap-2'
        >
            <button
            className='cta'
            >
                <PlayIcon className="w-9"/>
                <span>
                    {`05:00:00`}
                </span>
            </button>
            <button
            className='cta-outline'
            >
                <BellIcon className="w-9"/>
                <span>
                    {`Downloads`}
                </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default HomePageLiveNowTitle
