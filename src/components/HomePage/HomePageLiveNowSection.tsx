import React from 'react'
import HomePageLiveNowTitle from './HomePageLiveNowTitle'
import HomePageLiveNowSlider from './HomePageLiveNowSlider'

function HomePageLiveNowSection() {
  return (
    <section
    className='py-10 flex flex-col lg:flex-row gap-8 w-11/12 ml-auto overflow-hidden'
    >
      <HomePageLiveNowTitle/>
      <HomePageLiveNowSlider/>
    </section>
  )
}

export default HomePageLiveNowSection
