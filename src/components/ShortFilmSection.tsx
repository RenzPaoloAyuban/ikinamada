import React, { Suspense } from 'react'
import YoutubeVideoComponent from './ui/youtube-video-component'

const ShortFilmSection = () => {
  return (
    <div className="w-full h-200 flex flex-col items-center justify-center overflow-hidden gap-20">
      <h1 className="text-black text-4xl font-bold">
        Explore our work
      </h1>
      <div className="flex flex-row items-center justify-center overflow-hidden gap-20">
          <Suspense fallback={<p>Loading video...</p>}>
            <YoutubeVideoComponent />
          </Suspense>
          <div className='flex flex-col justify-center gap-5'>
              <h1 className="text-black text-3xl font-bold">
                Clean (Environmental Short Film)
              </h1>
              <p className="text-black w-150">
              "Clean" tells the story about a young ambitious journalist who seeks normalcy in a dystopian world ruled by government overlords in a rampant corporatocracy. Plying through an environmentally wrecked world, she seeks to get by, diligently following the rules set by the government. But as she sees discrepancies in both the rules set in place by the government and questionable actions, she realizes that things are not what they seem. 
              </p>
          </div>
        </div>
    </div>
  )
}

export default ShortFilmSection