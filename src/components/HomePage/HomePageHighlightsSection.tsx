"use client"
import React, { useState } from 'react'
import HomePageVideoPlayer from './HomePageVideoPlayer'
import HomePageHighlightsList from './HomePageHighlightsList'

function HomePageHighlightsSection({fights}: any) {
  const [selectedFight, setSelectedFight] = useState(fights[0] || null)
  return (
    <section
    className='py-10 flex flex-col gap-8 w-5/6 mx-auto'
    >
      <h2
      className='text-4xl uppercase font-semibold'
      >
        {`Popular highlights`}
      </h2>

      <div
      className='w-full flex flex-col lg:flex-row gap-10'
      >
        <HomePageVideoPlayer
        fight={selectedFight}
        />
        <HomePageHighlightsList
        fights={fights}
        selectedFight={selectedFight}
        setSelectedFight={setSelectedFight}
        />
      </div>
      
    </section>
  )
}

export default HomePageHighlightsSection
