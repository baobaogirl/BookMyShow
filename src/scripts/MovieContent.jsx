import React from 'react'

function MovieContent({activeIndex, MovieImage}) {
  return (
    <div>
       {MovieImage.map((slide, index) => (
                <div
                key={index}
                className='break-words w-[250px]'
                >
                <img  className="h-[380px] w-[230px] rounded-sm" src={slide.url} alt="Movie Poster" />
                <h2 className='mt-[8px] text-[#222222] font-semibold text-xl'>
                    {slide.Title}
                </h2>
                <h2 className='mt-[4px] text-[#666666] font-medium text-base'>
                    {slide.Genre}
                </h2>
                </div>
            ))}
    </div>
  )
}

export default MovieContent
