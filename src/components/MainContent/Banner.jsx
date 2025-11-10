import React from 'react'
import banner from "../../images/Stream banner.avif"

function Banner() {
  return (
    <div className='flex justify-center mt-[-50px]'>
       <img className='mx-100px cursor-pointer w-[calc(100%-200px)]' src={banner} />
    </div>
  )
}

export default Banner
