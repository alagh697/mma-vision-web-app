'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import HomePageSwiperSlide from './HomePageSwiperSlide'
import { Pagination } from 'swiper/modules'

function HomePageSwiperSection({title = 'Most viewed last month'}: any) {
  return (
    <section
    className='py-10 flex flex-col gap-8 w-11/12 ml-auto'
    >
      <h2
      className='text-4xl uppercase font-semibold'
      >
        {title}
      </h2>

      <Swiper
       grabCursor={true}
       
       slidesPerView={'auto'}
       spaceBetween={10}
       pagination={true}
       modules={[Pagination]}
       className="flex w-full justify-start"
    >
      <SwiperSlide>
        <HomePageSwiperSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageSwiperSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageSwiperSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageSwiperSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageSwiperSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageSwiperSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageSwiperSlide/>
      </SwiperSlide>
      <SwiperSlide>
        <HomePageSwiperSlide/>
      </SwiperSlide>
    
    </Swiper>
    </section>
  )
}

export default HomePageSwiperSection
