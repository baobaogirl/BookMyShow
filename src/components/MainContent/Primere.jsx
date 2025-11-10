import React from 'react'
import { CirclePlay } from 'lucide-react'
import PrimereContent from '../../scripts/PrimereContent'

function Primere() {
  return (
    <div className='bg-[#2B3148] h-[650px] w-full mt-[70px] flex flex-col box-border px-[100px] text-[#FEFFFF]'>
        <div className='py-[50px] flex gap-3'>
            <CirclePlay size={60} color='#DD344E'/>    
            <div className='flex flex-col justify-between'>
                <p className='text-3xl font-bold'>
                    PREMIERE
                </p>
                <p>
                    Watch new movies at home, every Friday
                </p>
            </div>  
        </div>
        <div>
            <p className='text-2xl font-bold'>
                Primeres
            </p>
            <p>
                Brand new releases every Friday
            </p>
            <div className='flex gap-8 mt-[20px] cursor-pointer'>
                {PrimereContent.map((item) => (
                    <div className='flex flex-col gap-1'>
                        <img className='w-[210px] h-[320px] rounded-md' src={item.url} alt="Movie Poster" />
                        <p className='text-lg font-semibold'>{item.title}</p>
                        <p className='font-normal'>{item.language}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Primere
