import React,{ useState } from 'react'
import First from "../../images/LP 1.jpg"
import Second from "../../images/LP 2.jpg"
import Third from "../../images/LP 3.jpg"
import Fourth from "../../images/LP 4.jpg"
import Fifth from "../../images/LP 5.jpg"
import Sixth from "../../images/LP 6.jpg"
import Seventh from "../../images/LP 7.jpg"
import Eigth from "../../images/LP 8.jpg"
import Ninth from "../../images/LP 9.jpg"
import Tenth from "../../images/LP 10.jpg"

const data = [
    {
        url:First,
        title:"Humare Ram Feat Ashutosh Rana",
        lang:"Hindi",
    },
    {
        url:Second,
        title:"SHRI RAM",
        lang:"Hindi"
    },
    {
        url:Third,
        title:"Mezok",
        lang:"Multi-lang",
        
    },
    {
        url:Fourth,
        title:"Naam Mein Kya Rakhwo Hai",
        lang:"Hindi"
        
    },
    {
        url:Fifth,
        title:"Scintillating Sinners of Chicago",
        lang:"English",
        
    },
    {
        url:Sixth,
        title:"Hello Zindagi",
        lang:"Hindi",
        
    },
    {
        url:Seventh,
        title:"305 Gali Mantola",
        lang:"Hindustani",
        
    },
    {
        url:Eigth,
        title:"Vo Saat Din Yamraj Ke",
        lang:"Hindi",

    },
    {
        url:Ninth,
        title:"Knock Knock",
        lang:"Hindi-English",
    },
    {
        url:Tenth,
        title:"Train To Pakistan",
        lang:"Hindi",
    }

]

export default function LatestPlays() {
 const [range, setRange] = useState([0, 5]) 
       
       const newData = data.slice(range[0], range[1])
     return (
       <div className='h-[650px] py-[60px] gap-6 bg-white'>
       <div className='mx-[100px] '>
         <div className='flex justify-between'>
           <p className=' text-[#333333] text-2xl font-semibold'>Latest Plays</p>
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
                       {d.lang}
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