import React,{ useState } from 'react'
import First from "../../images/Outdoor 1.jpg"
import Second from "../../images/Outdoor 2.jpg"
import Third from "../../images/Outdoor 3.jpg"
import Fourth from "../../images/Outdoor 4.jpg"
import Fifth from "../../images/Outdoor 5.jpg"
import Sixth from "../../images/Outdoor 6.jpg"
import Seventh from "../../images/Outdoor 7.jpg"
import Eigth from "../../images/Outdoor 8.jpg"
import Ninth from "../../images/Outdoor 9.jpg"
import Tenth from "../../images/Outdoor 10.jpg"

const data = [
    {
        url:First,
        title:"Zoofari Diwali Fest",
        venue:"Republic of Zoofari: Delhi",
    },
    {
        url:Second,
        title:"Rambo Circus - Delhi ",
        venue:"Talkatora Stadium: Delhi"
    },
    {
        url:Third,
        title:"HUMARE RAM Ft Ashutosh Rana and Rahull R Bhuchar",
        venue:"Kamani Auditorium: Delhi",
        
    },
    {
        url:Fourth,
        title:"GARBA DAZZLE 2.0",
        venue:"Dilli Haat Pitampura: Delhi",
        
    },
    {
        url:Fifth,
        title:"DP World India Championship 2025",
        venue:"Delhi Golf Club: New Delhi",
        
    },
    {
        url:Sixth,
        title:"Papa Yaar by Zakir Khan - Delhi",
        venue:"Indira Gandhi Indoor Stadium: New Delhi",
        
    },
    {
        url:Seventh,
        title:"Samay Raina - Still Alive & Unfiltered - Delhi",
        venue:"Indira Gandhi Indoor Stadium: New Delhi",
        
    },
    {
        url:Eigth,
        title:"Kal ki chinta ni karta ft. Ravi Gupta",
        venue:"Pacific Outlet Mall Jasola: Delhi",

    },
    {
        url:Ninth,
        title:"Naam Mein Ka Rakhwo Hai",
        venue:"The Stein Auditorium, India Habitat Centre: Delhi",
    },
    {
        url:Tenth,
        title:"Mezok",
        venue:"The Stein Auditorium, India Habitat Centre: Delhi",
    }

]

function Outdoor() {
    
    const [range, setRange] = useState([0, 5])   
    const newData = data.slice(range[0], range[1])

    return (
      <div className='h-[650px] py-[60px] gap-6 bg-[#F5F5F5]'>
      <div className='mx-[100px] '>
        <div className='flex justify-between'>
          <p className=' text-[#333333] text-2xl font-semibold'>Outdoor Events</p>
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

export default Outdoor
