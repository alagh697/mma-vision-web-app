import React from 'react'
import HomePageVideoPlayer from './HomePageVideoPlayer'
import HomePageHighlightsList from './HomePageHighlightsList'

function HomePageHighlightsSection() {
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
      className='w-full flex gap-10'
      >
        <HomePageVideoPlayer/>
        <HomePageHighlightsList/>
      </div>
      
    </section>
  )
}

export default HomePageHighlightsSection
