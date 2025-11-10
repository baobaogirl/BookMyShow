import React, { useState } from 'react'
import Movies from '../../scripts/Movies'
import MovieContent from '../../scripts/MovieContent'
import { Link } from 'react-router-dom'

function RecommendedMovies() {
  const [range, setRange] = useState([0, 5]) // start = 0, end = 4 by default

  const currMovie = Movies.slice(range[0], range[1])

  return (
    <div className='mx-[100px] h-[600px] mt-[40px]'>
      <div className='flex justify-between'>
        <p className=' text-[#333333] text-2xl font-semibold'>Recommended Movies</p>
        <p className='text-[#DC3558] text-sm cursor-pointer'>See All &#10095;</p>
      </div>

      <div className='mt-[10px] h-[500px] w-[1165px] flex justify-between gap-0.5 cursor-pointer'>
        {currMovie.map((movie, index) => (
           <Link to="/about" key={index}>
            <MovieContent MovieImage={[movie]} />
          </Link>
        ))}
      </div>

      <div className='flex justify-between mt-[-350px] w-[1320px] mx-[-40px]'>
            <span className="text-xl text-white bg-[#D6D6D6] cursor-pointer rounded-full w-7 text-center" onClick={() => setRange([0, 5])}>
                &#10094;
            </span>
            <span className="text-xl text-white bg-[#D6D6D6] cursor-pointer rounded-full w-7 text-center" onClick={() => setRange([5, 10])}>
                &#10095;
            </span>
        </div>
    </div>
  )
}

export default RecommendedMovies
