import React,{ useState } from 'react'
import First from "../../images/Event 1.avif"
import Second from "../../images/Event 2.avif"
import Third from "../../images/Event 3.avif"
import Fourth from "../../images/Event 4.avif"
import Fifth from "../../images/Event 5.avif"
import Sixth from "../../images/Event 6.avif"
import Seventh from "../../images/Event 7.avif"
import Eigth from "../../images/Event 8.avif"

const data = [
    {
        url:First,
    },
    {
        url:Second,
    },
    {
        url:Third
    },
    {
        url:Fourth
    },
    {
        url:Fifth
    },
    {
        url:Sixth
    },
    {
        url:Seventh
    },
    {
        url:Eigth
    }
]
function LiveEvents() {
    const [range, setRange] = useState([0, 5]) // start = 0, end = 4 by default
    
    const newData = data.slice(range[0], range[1])
  return (
    <div className='py-[50px] px-[100px] flex flex-col gap-7 justify-center h-[350px]'>
      <h1 className='text-[#333333] text-2xl font-semibold'>The Best of Live Events</h1>
      <div className='flex gap-5'>
        {newData.map((d)=>(
            <div>
                <img src={d.url} alt="" className='cursor-pointer h-[230px] w-[230px]' />
            </div>
        ))}
      </div>
      <div className='flex justify-between ml-[-40px] mt-[-135px] w-[1320px]'>
            <span className="text-xl text-white bg-[#D6D6D6] cursor-pointer rounded-full w-7 text-center" onClick={() => setRange([0, 5])}>
                &#10094;
            </span>
            <span className="text-xl text-white bg-[#D6D6D6] cursor-pointer rounded-full w-7 text-center" onClick={() => setRange([5, 9])}>
                &#10095;
            </span>
        </div>
    </div>
  )
}

export default LiveEvents

