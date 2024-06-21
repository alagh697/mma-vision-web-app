import React from 'react'
import HomePageNewsListItem from './HomePageNewsListItem'

function HomePageNewsSection() {
  return (
    <section
    className='py-10 flex flex-col gap-8 w-5/6 mx-auto'
    >
      <h2
      className='text-4xl uppercase font-semibold'
      >
        {`News roundup`}
      </h2>

    <ul
    className='grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center '
    >
        <HomePageNewsListItem/>
        <HomePageNewsListItem/>
        <HomePageNewsListItem/>
        <HomePageNewsListItem/>
    </ul>
    </section>
  )
}

export default HomePageNewsSection
