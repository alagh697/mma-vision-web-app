import React from 'react'
import HomePageHighlightListItem from './HomePageHighlightListItem'

function HomePageHighlightsList({fights, selectedFight, setSelectedFight}: any) {
  return (
    <ul
    className='overflow-y-auto flex flex-col gap-5 h-96 w-full lg:w-1/2 highlights'
    >
      {fights && fights?.length > 0 &&
      fights.map((fight:any) => 
        <HomePageHighlightListItem
        key={fight?.fightId}
        fight={fight}
        selectedFight={selectedFight}
        setSelectedFight={setSelectedFight}
        />
      )}
      
    
    </ul>
  )
}

export default HomePageHighlightsList
