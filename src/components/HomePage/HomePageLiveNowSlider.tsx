"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import HomePageLiveNowSlide from './HomePageLiveNowSlide';

function HomePageLiveNowSlider() {
  return (
    <div
    className=' w-3/5 bg-[#222222] p-6'
    >
       <Swiper
       effect={'coverflow'}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={'auto'}
       spaceBetween={100}
       coverflowEffect={{
         rotate: 0,
         stretch: 0,
         depth: 400,
         modifier: 1,
         slideShadows: false,
       }}
       pagination={true}
       modules={[EffectCoverflow, Pagination]}
       className="flex w-full justify-start"
    >
      <SwiperSlide>
        <HomePageLiveNowSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageLiveNowSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageLiveNowSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageLiveNowSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageLiveNowSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageLiveNowSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageLiveNowSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageLiveNowSlide/>
      </SwiperSlide>
    
    </Swiper>
    </div>
  )
}

export default HomePageLiveNowSlider
