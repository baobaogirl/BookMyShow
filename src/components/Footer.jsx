import React from 'react'
import whiteLogo from '../images/whiteLogo.png'
import { Tent, Facebook, Twitter, Instagram, Youtube, Linkedin, Headset, TicketCheck,MailCheck } from 'lucide-react'

function Footer() {
  return (
    <div className='bg-[#313035] py-[20px] px-[100px]'>
      <div className='flex justify-between py-[30px]'>
          <div className='flex gap-3'>
              <Tent color="#A7A6A7" size={30}/>
              <p className='font-bold text-[#FFFFFF]'>
                List Your Show
              </p>
              <p className='text-[#FFFFFF]'>
                Got a show, event, activity or great experience? Partner with us & get listed on BookMyShow
              </p>
          </div>
        <button className='cursor-pointer px-[18px] py-[8px] bg-[#EC5E71] text-[#FFF] rounded-sm font-semibold'>
          Contact Today!
        </button>
      </div>
      <div className='flex bg-[#404043] py-[20px] w-[calc(100%+200px)] -mx-[100px] justify-around'>
        <div className='flex flex-col justify-center gap-3 items-center cursor-pointer'>
          <Headset size={65} color='#C6C6C7'/>
          <p className='text-[#C6C6C7] text-sm'>24/7 Customer Care</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 cursor-pointer'>
          <TicketCheck size={65} color='#C6C6C7'/>
          <p className='text-[#C6C6C7] text-sm'>Resend Booking Confirmation</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 cursor-pointer'>
          <MailCheck size={65} color='#C6C6C7'/>
          <p className='text-[#C6C6C7] text-sm'>Subscribe to the Newsletter</p>
        </div>
      </div>
      <div className='mt-[20px] flex flex-col gap-4'>
        <p className='text-[#A5A59F] text-sm'>MOVIES NOW SHOWING IN CHANDIGARHH</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>Jolly LLB 3 | Demon Slayer: Kimestu No Yaiba | The Conjuring: The Last Rites | Mirai | Punjabi Aa Gaye Oye 
        | Baghi 4 | Heer Express | Ek Chatur Naar | Mannu Kya? Karegga | The Bengal Files </p>
        <p className='text-[#A5A59F] text-sm'>UPCOMING MOVIES IN CHANDIGARHH</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          Chalo Jeete Hai | Mr. Solider | Ilati Cinema Meerppudu Chusundaru | Andhela Ravamidhi | Kiss (Tamil) | Nishaanchi
          | Vijeyta | Quotation Gang Part: One
        </p>
        <p className='text-[#A5A59F] text-sm'>MOVIES BY GENRE</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          Drama Movies | Comedy Movies | Action Movies | Romantic Movies | Thriller Movies | Family Movies |
          Fantasy Movies | Crime Movies | Horror Movies | Adventure Movies
        </p>
        <p className='text-[#A5A59F] text-sm'>MOVIES BY LAGNUAGE</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          Movies in Hindi | Movies in English | Movies in Punjabi | Movies in Japanese | Movies in Portuguese 
          | Movies in Khasi | Movies in Sindhi | Movies in Chattisgarh | Movies in English 7D | Movies in French
        </p>
        <p className='text-[#A5A59F] text-sm'>SPORTS EVENTS IN CHANDIGARHH</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          Cricket | Running | Chess | Cycling | Walking | Kabaddi | Baseball | Horse Race | Boat Race | Archery
        </p>
        <p className='text-[#A5A59F] text-sm'>EVENTS IN TOP CITIES</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          Events in Mumbai | Events in Delhi-NCR | Events in Chennai | Events in Pune | Events in Ahmedabad |
          Events in Kolkata | Events in Kochi
        </p>
        <p className='text-[#A5A59F] text-sm'>CINEMAS IN TOP CITIES</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'> 
          Cinemas in Mumbai | Cinemas in Delhi-NCR | Cinemas in Chennai | Cinemas in Bengaluru | Cinemas in Hyderabad
          | Cinemas in Pune | Cinmeas in Ahmedabad | Cinemas in Kolkata | Cinemas in Kochi
        </p>
        <p className='text-[#A5A59F] text-sm'>PLAYS IN TOP CITIES</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          Plays in Mumbai | Plays in Delhi-NCR | Plays in Chennai | Plays in Bengaluru | Plays in Hyderabad | Plays in
          Plays in Ahmedabad | Plays in Kolkata | Plays in Kochi 
        </p>
        <p className='text-[#A5A59F] text-sm'>ACTIVITIES IN TOP CITIES</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          Activities in Mumbai | Activities in Delhi-NCR | Activities in Chennai | Activities in Bengaluru |Activities in Hyderabad | Activities in
          Activities in Ahmedabad | Activities in Kolkata | Activities in Kochi 
        </p>
        <p className='text-[#A5A59F] text-sm'>MOVIES NOW SHOWING</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          Jolly LLB 3 | Kimetsu No Yaiba | Dashavtar | Mirai | The Conjuring: The last rites | Kishkindhapuri
          | Baaghi 4 | Little Hearts | Madharaasi | Bachu Ni Benpani
        </p>
        <p className='text-[#A5A59F] text-sm'>COUNTRIES</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          Indonesia | West Indies | Sri Lanka | Singapore
        </p>
        <p className='text-[#A5A59F] text-sm'>HELP</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>About Us | Contact Us | Current Opening | Press Release | Press Coverage | Sitemaps | FAQs |
        Terms and Condition | Privacy Policy
        </p>
        <p className='text-[#A5A59F] text-sm'>BOOKMYSHOW EXCLUSIVES</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          Lollapalooza India | BookAChange | Corporate Vouchers | Gift Cards | List my Show | Offers | Streams | Trailers
        </p>
        <p className='text-[#A5A59F] text-sm'>ICC's WOMEN'S CRICKET WORLD CUP 2025</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>Women's CWC 2025 Matches in India | Women's CWC 2025 Matches in Sri Lanka</p>
        <p className='text-[#A5A59F] text-sm'>WOMEN'S CWC 2025 TEAMS (INDIA)</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          IND Women's CWC Matches 2025 | AUS Women's CWC Matches 2025 | BAN Women's CWC Matches 2025 | ENG Women's CWC Matches 2025 | 
          PAK Women's CWC Matches 2025 | NZ Women's CWC Matches 2025 | SA Women's CWC Matches 2025 | SL Women's CWC Matches 2025
        </p>
        <p className='text-[#A5A59F] text-sm'>WOMEN'S CWC 2025 TEAMS SRI LANKA</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          IND Women's CWC Matches 2025 (Sri Lanka) | AUS Women's CWC Matches 2025 (Sri Lanka) | BAN Women's CWC Matches 2025 (Sri Lanka) | ENG Women's CWC Matches 2025 (Sri Lanka) | 
          PAK Women's CWC Matches 2025 (Sri Lanka) | NZ Women's CWC Matches 2025 (Sri Lanka) | SA Women's CWC Matches 2025 (Sri Lanka) | SL Women's CWC Matches 2025 (Sri Lanka)
        </p>
        <p className='text-[#A5A59F] text-sm'>WOMEN'S CWC 2025 VENUES IN INDIA</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>
          Indore Cricket Matches 2025 | Navi Mumbai Cricket Matches 2025 | Vishakhapatnam Cricket Matches 2025 | Guwahati Cricket Matches 2025
        </p>
        <p className='text-[#A5A59F] text-sm'>WOMEN'S CWC 2025 VENUES IN SRI LANKA</p>
        <p className='text-[#A5A59F] cursor-pointer hover:text-[#FFF] text-xs'>Colombo Cricket 2025</p>
      </div>
      <div className='flex justify-center'>
        <img className='h-[70px] w-[175px]' src={whiteLogo} />
      </div>
      <div className='mt-[40px]'>
        <div className='flex justify-center gap-3.5 mb-[30px]'>
            <Facebook size={40} color="#313035" className='cursor-pointer bg-[#5D5D5F] hover:bg-white rounded-full py-1.5'/>
            <Twitter size={40} color='#313035' className='cursor-pointer bg-[#5D5D5F] hover:bg-white rounded-full py-1.5' />
            <Instagram size={40} color='#313035' className='cursor-pointer bg-[#5D5D5F] hover:bg-white rounded-full py-1.5' />
            <Youtube size={40} color='#313035' className='cursor-pointer bg-[#5D5D5F] hover:bg-white rounded-full py-1.5' />
            <Linkedin size={40} color='#313035' className='cursor-pointer bg-[#5D5D5F] hover:bg-white rounded-full py-1.5' />
        </div>
        <div className='flex flex-col text-center justify-center text-[#666666]'>
          <p className='text-sm'>Copyright 2025 BigTree Entertainment Pvt. Ltd. All Rights Reserved</p>
          <p className='text-sm'>The content and the images used on the site are copyright protected vests with respective owners. The usage 
          of the content and images on this website is intended to promote the works and no edorsements of the
          artist shall be implied. Unauthorised usage is prohibited by the law and is punishable</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
