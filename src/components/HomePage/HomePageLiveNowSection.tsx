import React from 'react'
import HomePageLiveNowTitle from './HomePageLiveNowTitle'
import HomePageLiveNowSlider from './HomePageLiveNowSlider'

function HomePageLiveNowSection() {
  return (
    <section
    className='py-10 flex w-full relative'
    >
      <HomePageLiveNowTitle/>
      <HomePageLiveNowSlider/>
    </section>
  )
}

export default HomePageLiveNowSection
