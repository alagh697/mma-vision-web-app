import { StarIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

function HomePageReviewsListItem() {
  return (
    <div className="relative w-full bg-neutral-300">
    <div className="-mt-10 flex w-full  flex-col mx-auto items-center justify-center pb-6 px-6 space-y-2 ">
      <div className="rounded-full aspect-square w-16 relative ">
        <Image
          alt="makeup"
          fill
          className="object-cover absolute z-10 rounded-full"
          src={"/khabib.jpg"}
        />
      </div>
      <h4 className="font-medium text-neutral-800 ">Lorem ipsum</h4>

      <div className="flex flex-row text-yellow-500">
        <StarIcon className="h-6 w-6" />
        <StarIcon className="h-6 w-6" />
        <StarIcon className="h-6 w-6" />
        <StarIcon className="h-6 w-6" />
        <StarIcon className="h-6 w-6" />
      </div>
      <p className="text-sm text-neutral-700 text-center w-full">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
        vero quam velit
      </p>
    </div>
  </div>
  )
}

export default HomePageReviewsListItem
