import React from 'react'
import HomePageHighlightListItem from './HomePageHighlightListItem'

function HomePageHighlightsList() {
  return (
    <ul
    className='overflow-y-auto flex flex-col gap-5 h-96 w-1/2 highlights'
    >
      <HomePageHighlightListItem/>
      <HomePageHighlightListItem/>
      <HomePageHighlightListItem/>
      <HomePageHighlightListItem/>
      <HomePageHighlightListItem/>
      <HomePageHighlightListItem/>
      <HomePageHighlightListItem/>
      <HomePageHighlightListItem/>
      <HomePageHighlightListItem/>
    </ul>
  )
}

export default HomePageHighlightsList
