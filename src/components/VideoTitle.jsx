
import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video pt-[20%] px-12 text-white bg-gradient-to-r from-black via-black/60 to-transparent">

      <h1 className="text-5xl md:text-6xl font-bold">
        {title}
      </h1>

      <p className="py-6 text-lg md:text-2xl w-1/2 line-clamp-3 p-2">
        {overview}
      </p>

      <div className="flex items-center gap-3 mt-2">

        <button className="bg-white text-black font-semibold px-8 py-2 text-xl rounded-md hover:bg-opacity-80 transition">
          ▶ Play
        </button>

        <button className="bg-gray-500/70 text-white px-8 py-2 text-xl rounded-md hover:bg-gray-500 transition">
          More Info
        </button>

      </div>

    </div>
  )
}

export default VideoTitle
