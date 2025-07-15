import React from 'react'

export default async function YoutubeVideoComponent() {
  const src = "https://www.youtube.com/embed/We9fZ6AgzvQ?start=18"

  return <iframe 
    src={src} 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen 
    className='w-200 h-125'
  />
}
