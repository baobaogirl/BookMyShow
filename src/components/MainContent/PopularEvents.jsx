import React,{ useState } from 'react'
import First from "../../images/Pop 1.jpg"
import Second from "../../images/Pop 2.jpg"
import Third from "../../images/Pop 3.jpg"
import Fourth from "../../images/Pop 4.jpg"
import Fifth from "../../images/Pop 5.jpg"
import Sixth from "../../images/Pop 6.jpg"
import Seventh from "../../images/Pop 7.jpg"
import Eigth from "../../images/Pop 8.jpg"
import Ninth from "../../images/Pop 9.jpg"
import Tenth from "../../images/Pop 10.jpg"

const data = [
    {
        url:First,
        title:"Nayab Midha Live",
        venue:"The Laugh Store: DLF Cyberhub",
    },
    {
        url:Second,
        title:"Perfect Role Model by Sonali Thakker",
        venue:"The Piano Man, Gurugram"
    },
    {
        url:Third,
        title:"Bhagvad Gita Talks- Jaya Row",
        venue:"Kamani Sahni Auditorium: Delhi",
        
    },
    {
        url:Fourth,
        title:"Magic Show by Magicican OP Sharma",
        venue:"Aiwan-E-Ghalid Auditorium: Delhi",
        
    },
    {
        url:Fifth,
        title:"Book Launch- Abhi ik SHER Kehna Reh Gaya",
        venue:"Hideout Studio: Delhi ",
        
    },
    {
        url:Sixth,
        title:"Room xo Presents: Rodolphe Manuokian",
        venue:"Room Xo: Gurugram",
        
    },
    {
        url:Seventh,
        title:"Dhyan Geet",
        venue:"Kamani Auditorium",
        
    },
    {
        url:Eigth,
        title:"Papon Live In Concert",
        venue:"Yashobhoomi Convention Center: Delhi",

    },
    {
        url:Ninth,
        title:"Dandiya Night",
        venue:"Molecule IFC: Gurugram",
    },
    {
        url:Tenth,
        title:"Ishq Sufiyana By Lakshay",
        venue:"Bipin Chandra Pal Bhavan: Delhi",
    }

]


function PopularEvents() {
  const [range, setRange] = useState([0, 5]) 
          
  const newData = data.slice(range[0], range[1])
  return (
    <div className='h-[650px] py-[60px] gap-6'>
    <div className='mx-[100px] '>
      <div className='flex justify-between'>
        <p className=' text-[#333333] text-2xl font-semibold'>Popular Events</p>
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

export default PopularEvents
