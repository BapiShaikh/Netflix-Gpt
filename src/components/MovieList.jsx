
import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

  return (
    <div className="px-6 py-4">

      <h1 className="text-2xl font-bold text-black mb-4">
        {title}
      </h1>

      <div className="flex overflow-x-auto">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>

    </div>
  )
}

export default MovieList
