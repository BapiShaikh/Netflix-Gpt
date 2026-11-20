import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    <div>
      <div className='-mt-40 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trainding"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Most Popular"} movies={movies.addPopularMovies} />
      <MovieList title={"Action Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Best For You"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
