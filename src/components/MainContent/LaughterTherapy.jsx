import React,{ useState } from 'react'
import First from "../../images/LT 1.jpg"
import Second from "../../images/LT 2.jpg"
import Third from "../../images/LT 3.jpg"
import Fourth from "../../images/LT 4.jpg"
import Fifth from "../../images/LT 5.jpg"
import Sixth from "../../images/LT 6.jpg"
import Seventh from "../../images/LT 7.jpg"
import Eigth from "../../images/LT 8.jpg"
import Ninth from "../../images/LT 9.jpg"
import Tenth from "../../images/LT 10.jpg"

const data = [
    {
        url:First,
        title:"Telling Lies By Aashish Solanki",
        venue:"The Laugh Casa, Rcube Monad Mall: Noida",
    },
    {
        url:Second,
        title:"Vikramjit Singh - Talking & Touring",
        venue:"The Laugh Store: DLF Cyberhub, Gurugram"
    },
    {
        url:Third,
        title:"Master Peace - Standup Comedy Show By Madhur Virli",
        venue:"Kedarnath Sahni Auditorium: Delhi",
        
    },
    {
        url:Fourth,
        title:"Max Amini - Delhi",
        venue:"Yashobhoomi Convention Center: Delhi",
        
    },
    {
        url:Fifth,
        title:"Gaurav Gupta Live",
        venue:"The Laugh Store: DLF Cyberhub, ",
        
    },
    {
        url:Sixth,
        title:"Gen WHY: A Millennial Spiral By Swati Sachdeva",
        venue:"The Laugh Store: DLF Cyberhub, Gurugram",
        
    },
    {
        url:Seventh,
        title:"Abishek Wants to Enjoy Life - A Comedy Special ",
        venue:"The Laugh Store: DLF Cyberhub, Gurugram",
        
    },
    {
        url:Eigth,
        title:"Max Amini - Delhi",
        venue:"Yashobhoomi Convention Center: Delhi",

    },
    {
        url:Ninth,
        title:"Nishant Suri Live - Stand Up Comedy Solo",
        venue:"Comedy County: Noida",
    },
    {
        url:Tenth,
        title:"Ab Hai Aapki Bari by Inder Sahani",
        venue:"Hideout Comedy Club: Delhi",
    }

]


function LaughterTherapy() {
  const [range, setRange] = useState([0, 5]) 
        
        const newData = data.slice(range[0], range[1])
      return (
        <div className='h-[650px] py-[60px] gap-6 bg-white'>
        <div className='mx-[100px] '>
          <div className='flex justify-between'>
            <p className=' text-[#333333] text-2xl font-semibold'>Laughter Therapy</p>
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
  
export default LaughterTherapy
