"use client"

import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
// import { AppStoreButton, ButtonsContainer, GooglePlayButton } from 'react-mobile-app-button';



function HomePageHeroSection() {

  const APKUrl = "https://play.google.com/store/apps/details?id=host";

  return (
    <section className="relative w-full h-screen">
      <Image
      src={`/silva.jpg`}
      fill
      alt={`Silva ko belfort`}
      className='object-cover grayscale'
      />

      <div
      className='absolute top-0 left-0 
      w-full h-full'
      >
        <div
        className='h-3/4 my-auto w-11/12 ml-auto
      flex flex-col justify-end items-start gap-10'
        >
        <h1
        className='text-3xl lg:text-5xl uppercase font-black'
        >
            {`Silva vs Belfort`}
        </h1>

        <p
        className='text-sm lg:text-base max-w-sm lg:max-w-md'
        >
            {`During the main event of UFC 126 in February 2011, Silva achieved one of the most incredible knockouts in MMA history by delivering a front kick to Belfort's jaw and knocking him out with punches.`}
        </p>

        <div
        className='flex flex-col lg:flex-row gap-2'
        >
            <button
            className='cta'
            >
                <PlayIcon className="w-9"/>
                <span>
                    {`Play now`}
                </span>
            </button>
            <button
            className='cta-outline'
            >
                <ArrowDownCircleIcon className="w-9"/>
                <span>
                    {`Downloads`}
                </span>
            </button>
        </div>
        <div
        className='flex flex-col lg:flex-row gap-2'
        >
           {/* <ButtonsContainer>
      <GooglePlayButton
        url={APKUrl}
        theme={"light"}
        className={"flex gap-4 bg-white text-black w-auto h-auto"}
      />

      <AppStoreButton
        url={APKUrl}
        theme={"light"}
        className={"flex gap-4 bg-white text-black w-auto h-auto"}
      />
    </ButtonsContainer> */}
        </div>
        </div>
      </div>
    </section>
  )
}

export default HomePageHeroSection
