import React,{ useState } from 'react'
import First from "../../images/Fun 1.jpg"
import Second from "../../images/Fun 2.jpg"
import Third from "../../images/Fun 3.jpg"
import Fourth from "../../images/Fun 4.jpg"
import Fifth from "../../images/Fun 5.jpg"
import Sixth from "../../images/Fun 6.jpg"
import Seventh from "../../images/Fun 7.jpg"
import Eigth from "../../images/Fun 8.jpg"
import Ninth from "../../images/Fun 9.jpg"
import Tenth from "../../images/Fun 10.jpg"

const data = [
    {
        url:First,
        title:"Pacific Dandiya Nights",
        venue:"Pacific Mall Pitampura: New Delhi",
    },
    {
        url:Second,
        title:"Pacific Dandiya Nights",
        venue:"Pacific Mall Tagore Garden: New Delhi"
    },
    {
        url:Third,
        title:"Red Fort: Centre",
        venue:"Red Fort: Delhi",
        
    },
    {
        url:Fourth,
        title:"Nehru Planaterium",
        venue:"Nehru Planaterium: Delhi",
        
    },
    {
        url:Fifth,
        title:"Global Garba Festival 2025",
        venue:"Sunder Nursery: Delhi",
        
    },
    {
        url:Sixth,
        title:"The Dandiya Tales 2025",
        venue:"Vegas Mall: New Delhi",
        
    },
    {
        url:Seventh,
        title:"Jai Hind- Red Fort Light and Sound Show",
        venue:"Red Fort: Delhi",    
    },
    {
        url:Eigth,
        title:"Dandiya Ras 2.0",
        venue:"Ramlila Ground, Sector 3: Delhi",

    },
    {
        url:Ninth,
        title:"JALSA 9.0: The Chairt Dandiya Night",
        venue:"Abhinav Public School, Delhi",
    },
    {
        url:Tenth,
        title:"RAAS OTSAV 2025",
        venue:"Garden of Five Senses: Delhi",
    }
]

function FunActivities() {

  const [range, setRange] = useState([0, 5])   
  const newData = data.slice(range[0], range[1])

  return (
    <div className='h-[650px] py-[60px] gap-6 bg-white'>
    <div className='mx-[100px] '>
      <div className='flex justify-between'>
        <p className=' text-[#333333] text-2xl font-semibold'>Explore Fun Activities</p>
        <p className='text-[#DC3558] text-sm cursor-pointer'>See All &#10095;</p>
      </div>
      <div className='flex gap-5 mt-[10px]'>
        {newData.map((d,index)=>(
            <div
                key={index}
                className='break-words w-[250px]'
            >
                <img src={d.url} alt="" className='h-[380px] w-[230px] rounded-sm cursor-pointer' />
                <h2 className='mt-[8px] text-[#222222] font-semibold text-xl'>
                    {d.title}
                </h2>
                <h2 className='mt-[2px] text-[#666666] font-medium text-base'>
                    {d.venue}
                </h2>
            </div>
        ))}
      </div>

      <div className='flex justify-between mt-[-300px] w-[1320px] mx-[-40px]'>
            <span className="text-xl text-white bg-[#D6D6D6] cursor-pointer rounded-full w-7 text-center" onClick={() => setRange([0, 5])}>
                &#10094;
            </span>
            <span className="text-xl text-white bg-[#D6D6D6] cursor-pointer rounded-full w-7 text-center" onClick={() => setRange([5, 10])}>
                &#10095;
            </span>
        </div>
        </div>
  </div>
)
}

export default FunActivities
