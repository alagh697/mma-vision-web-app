import HomePageHeroSection from '@/components/HomePage/HomePageHeroSection'
import HomePageHighlightsSection from '@/components/HomePage/HomePageHighlightsSection'
import HomePageLiveNowSection from '@/components/HomePage/HomePageLiveNowSection'
import HomePageNewsSection from '@/components/HomePage/HomePageNewsSection'
import HomePageReviewSection from '@/components/HomePage/HomePageReviewSection'
import HomePageSwiperSection from '@/components/HomePage/HomePageSwiperSection'
import React from 'react'

function HomePageView({fights}: any) {
  return (
    <>
      <HomePageHeroSection/>
      <HomePageHighlightsSection
      fights={fights}
      />
      <HomePageLiveNowSection/>
      <HomePageSwiperSection/>
      
      <HomePageReviewSection/>
      <HomePageNewsSection/>
      <HomePageSwiperSection title={`Knockouts of the Season`}/>
    </>
  )
}

export default HomePageView
