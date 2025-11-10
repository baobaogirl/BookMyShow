import React,{ useState } from 'react'
import First from "../../images/TG 1.jpg"
import Second from "../../images/TG 2.jpg"
import Third from "../../images/TG 3.jpg"
import Fourth from "../../images/TG 4.jpg"
import Fifth from "../../images/TG 5.jpg"
import Sixth from "../../images/TG 6.jpg"
import Seventh from "../../images/TG 7.jpg"
import Eigth from "../../images/TG 8.jpg"
import Ninth from "../../images/TG 9.jpg"
import Tenth from "../../images/TG 10.jpg"

const data = [
    {
        url:First,
        title:"Dwarka Runaway Marathon 2025",
        venue:"Vegas Mall: New Delhi",
    },
    {
        url:Second,
        title:"Shirin Yoku - The Art of Forest Chi Bathing",
        venue:"Japanah Forest: New Delhi"
    },
    {
        url:Third,
        title:"SBI Green Marathon Season 6 Delhi",
        venue:"Venue To Be Announced: Delhi(NCR)",
        
    },
    {
        url:Fourth,
        title:"Free Steps Virtual Marathon: Without Rules",
        venue:"Your Place Your Time: Delhi",
        
    },
    {
        url:Fifth,
        title:"Trail Blazers Victory Trail Marathon",
        venue:"Your Place Your Time: New Delhi",
        
    },
    {
        url:Sixth,
        title:"Push Harder Day Run Challenge Marathon",
        venue:"Your Place Your Time: Delhi",
        
    },
    {
        url:Seventh,
        title:"Step-up Day Run Challenge Virtual Marathon",
        venue:"Your Place Your Time: Delhi",
        
    },
    {
        url:Eigth,
        title:"Step-up Day Run Challenge Virtual Marathon",
        venue:"Your Place Your Time: Delhi",

    },
    {
        url:Ninth,
        title:"Dwarka Legends Half Marathon",
        venue:"Dwarka Sector 13: Delhi",
    },
    {
        url:Tenth,
        title:"Dilli 10k Run- Edition 2.0",
        venue:"Jawaharlal Nehru Stadium: Delhi",
    }

]


function TopGames() {
  const [range, setRange] = useState([0, 5]) 
        
  const newData = data.slice(range[0], range[1])

  return (
    <div className='h-[650px] py-[60px] gap-6 bg-[#F5F5F5]'>
    <div className='mx-[100px] '>
      <div className='flex justify-between'>
        <p className=' text-[#333333] text-2xl font-semibold'>Top Games And Sports Events</p>
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

export default TopGames
