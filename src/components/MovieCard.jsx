
import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-48 md:w-64 pr-4 flex-shrink-0">
      <img
        className="w-full rounded-md object-cover"
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard
