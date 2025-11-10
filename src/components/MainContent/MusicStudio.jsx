import React, { useState } from 'react'
import First from "../../images/Music 1.avif"
import Second from "../../images/Music 2.avif"
import Third from "../../images/Music 3.jpg"
import Fourth from "../../images/Music 4.jpg"
import Fifth from "../../images/Music 5.jpg"
import Sixth from "../../images/Music 6.jpg"
import Seventh from "../../images/Music 7.jpg"
import Eigth from "../../images/Music 8.jpg"
import Ninth from "../../images/Music 9.jpg"
import Tenth from "../../images/Music 10.jpg"

const data = [
    {
        url:First,
        title:"Sachet Parampara-Live Concert Delhi",
        venue:"Major Dhyanchand National Stadium: Delhi",
        type:"Concerts",
    },
    {
        url:Second,
        title:"Re:Sound with Lucky Ali - Delhi",
        venue:"Yashobhoomi Convention Center: Delhi",
        type:"Concerts",
    },
    {
        url:Third,
        title:"Indias Biggest Halloween Ft. Talwiinder - Delhi",
        venue:"Venue To Be Announced: Delhi (NCR)",
        type:"Concerts",
    },
    {
        url:Fourth,
        title:"SONU NIGAM LIVE IN CONCERT GURUGRAM",
        venue:"Gymkhana Club: Gurugram",
        type:"Concerts",
    },
    {
        url:Fifth,
        title:"Shaan - Live Concert Delhi",
        venue:"Major Dhyanchand National Stadium: Delhi",
        type:"Concerts",
    },
    {
        url:Sixth,
        title:"Smirnoff Experience ft. AFROJACK - Delhi",
        venue:"Venue To Be Announced: Delhi (NCR)",
        type:"Concerts",
    },
    {
        url:Seventh,
        title:"Nykaaland 2025 - Beauty's Biggest Playground",
        venue:"NSIC Exhibition Grounds, Okhla",
        type:"Concerts",
    },
    {
        url:Eigth,
        title:"Unplugged Duo Ft. Isun Live",
        venue:"Hard Rock Cafe: Delhi",
        type:"Club Gigs",
    },
    {
        url:Ninth,
        title:"Jon Batiste - The Maestro Series - Delhi",
        venue:"Plenary Hall Bharat Mandapam: Delhi",
        type:"Concerts",
    },
    {
        url:Tenth,
        title:"Dhyan Sangeet Meditation Program: New Delhi",
        venue:"Kamani Auditorium: Delhi",
        type:"Concerts",
    }

]

function MusicStudio() {
    const [range, setRange] = useState([0, 5]) 
    
    const newData = data.slice(range[0], range[1])
  return (
    <div className='h-[650px] py-[40px] gap-6 bg-white'>
    <div className='mx-[100px] '>
      <div className='flex justify-between'>
        <p className=' text-[#333333] text-2xl font-semibold'>Your Music Studio</p>
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
                <h2 className='text-[#666666] font-medium text-base'>
                    {d.type}
                </h2>
            </div>
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
    </div>
  )
}

export default MusicStudio
