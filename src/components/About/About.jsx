import React from 'react';
import image from "../../images/Poster 3.avif" 
import { CircleUserRound,Star, ThumbsDown, ThumbsUp, Share2} from 'lucide-react';
import First from "../../images/Cast 1.avif"
import Second from "../../images/Cast 2.avif"
import Third from "../../images/Cast 3.avif"
import Director from "../../images/Director 1.avif"
import logo from "../../images/logo.png"
import { Link, useLocation, useNavigate  } from 'react-router-dom'

function About() {
  return (
    <div>
      <div className='h-[500px] bg-[#1A1A1A] flex items-center px-[100px]'>
        <div className='relative cursor-pointer'>
            <img className="h-[392px] w-[261px] rounded-3xl" src={image} alt="" />
            <div className='h-[30px] w-[261px] bg-black rounded-b-3xl m-[-30px] absolute 
            bottom-[35px] left-[30px] flex items-center justify-center'>
              <p className='text-white text-base'>In Cinemas</p>
            </div>   
        </div>
        <div className='flex flex-col gap-[20px] mx-[30px] w-[500px] break-words'>
              <p className='text-3xl text-white font-bold'>
              Kimetsu No Yaiba: Demon Slayer Moobie</p>
              <div className='w-[446px] h-[64px] bg-[#333333] rounded-md flex items-center justify-around'>
                  <div className='flex gap-[10px]'>
                    <Star size={30} color="#F07584"/>
                    <p className='text-white text-lg font-semibold'>9.5/10 (103k Votes) </p>  
                  </div>
                  <div>
                      <button className='bg-white px-[10px] py-[10px] rounded-lg cursor-pointer font-semibold'>
                        Rate Now
                      </button>
                  </div>
              </div>
              <div className='flex flex-col gap-2'>
                  <div className='bg-[#E5E5E5] px-[10px] py-[2px] rounded-xs w-fit'>
                    <p>
                      2D , ICE , 4DX , DOLBY CINEMA 2D , MX4D , IMAX 2D
                    </p>  
                  </div>
                  <div className='bg-[#E5E5E5] px-[10px] py-[2px] rounded-xs w-fit'>
                    <p>
                      Japanese, English, Tamil, Hindi, Telugu
                    </p>
                  </div>
              </div>
              <p className='text-white text-base'>
                  2h 35m • Action/Adventure/Anime • UA13+ • 12th Sep, 2025
              </p>
              <div className='mt-[35px]'>
                  <Link to="/book">
                    <button className='bg-[#F84464] px-[70px] py-[13px] text-md text-white rounded-md font-semibold cursor-pointer'>
                      Book Tickets
                    </button>
                  </Link>
              </div>
        </div>
      </div>
      <div className='px-[100px] py-[50px] h-fit w-[1090px] break-words'>
        <div className='flex flex-col gap-8'>
          <p className='text-2xl text-black font-bold'>About the Movie</p>
          <p className='text-[#333333]'>
          The Demon Slayer Corps plunge into Infinity Castle to defeat Muzan. However, 
          the remaining Hashiras and the Demon Slayers who survived Tanjiro's Final Selection are pitted 
          against the remaining members of the Twelve Kizuki first.
          </p>
          <hr className='border-t-[1.3px] border-[#E5E5E5]' />
        </div>
        <div className='flex flex-col gap-8 pt-[20px]'>
          <p className='text-2xl text-black font-bold'>Cast</p>
          <div className='flex gap-8'>
            <div className='flex flex-col gap-1'>
              <img className='rounded-full h-[120px] w-[120px]' src={Second} alt="" />
              <div className='flex flex-col w-[120px] break-words'>
                <p className='font-normal text-center'>
                  Natsuki Hanae
                </p>
                <p className='text-sm font-medium text-[#666666] text-center'>
                  Actor
                </p>
              </div>
            </div>
            <div className='flex flex-col'>
              <img className='rounded-full h-[120px] w-[120px]' src={First} alt="" />
              <div className='flex flex-col w-[120px] break-words'>
                <p className='font-normal text-center'>
                  Yoshitsigi Matusouka
                </p>
                <p className='text-sm font-medium text-[#666666] text-center'>
                  Actor
                </p>
              </div>
            </div>
            <div className='flex flex-col'>
              <img className='rounded-full h-[120px] w-[120px]' src={Third} alt="" />
              <div className='flex flex-col w-[120px] break-words'>
                <p className='font-normal text-center'>
                  Hiro Shimono
                </p>
                <p className='text-sm font-medium text-[#666666] text-center'>
                  Actor
                </p>
              </div>
            </div>
          </div>
          <hr className='border-t-[1.3px] border-[#E5E5E5]' />
        </div>
        <div className='flex flex-col gap-8 pt-[20px]'>
          <p className='text-2xl text-black font-bold'>Crew</p>
          <div className='flex flex-col'>
              <img className='rounded-full h-[120px] w-[120px]' src={Director} alt="" />
              <div className='flex flex-col w-[120px] break-words'>
                <p className='font-normal text-center'>
                  Hauro Sotazaki
                </p>
                <p className='text-sm font-medium text-[#666666] text-center'>
                  Director
                </p>
              </div>
            </div>
            <hr className='border-t-[1.3px] border-[#E5E5E5]' />
        </div>
        <div className='flex flex-col gap-8 pt-[20px]'>
          <div className='flex justify-between'>
            <p className='text-2xl text-black font-bold'>Top Reviews</p>
            <p className='text-[#DC354B] text-lg font-semibold'>58.5K Reviews &#10095;</p>
          </div>
          <p className='text-[#666666] font-normal'>
            Summary of 50.5k Reviews.
          </p>
          <div className='flex gap-4'>
            <div className='px-[20px] py-[8px] border border-[#999999] rounded-2xl'>
                <p className='text-[#DC354B]'>#AwesomeStory <span className='bg-[#CCCCCC] px-1 text-black rounded-xs'>33838</span>
                </p>
            </div>
            <div className='px-[20px] py-[8px] border border-[#999999] rounded-2xl'>
                <p className='text-[#DC354B]'>#Blockbuster <span className='bg-[#CCCCCC] px-1 text-black rounded-xs'>30531</span>
                </p>
            </div>
            <div className='px-[20px] py-[8px] border border-[#999999] rounded-2xl'>
                <p className='text-[#DC354B]'>#WellMade <span className='bg-[#CCCCCC] px-1 text-black rounded-xs'>29746</span>
                </p>
            </div>
            <div className='px-[20px] py-[8px] border border-[#999999] rounded-2xl'>
                <p className='text-[#DC354B]'>#Unbelieveable <span className='bg-[#CCCCCC] px-1 text-black rounded-xs'>16284</span>
                </p>
            </div>
          </div>
          <div className='flex gap-8'>
            <div className='px-[20px] w-[400px] py-[25px] border border-[#666666] rounded-md flex flex-col gap-4'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-1.5'>
                  <div>
                    <CircleUserRound size={45} color="#D7D7D7"/>
                  </div>
                  <div className='flex flex-col justify-center gap-0.5'>
                    <p>User 1</p>
                    <p className='text-[#666666] font-semibold text-sm'>Booked on BookMyShow</p>
                </div>
                </div>
                <div className='flex gap-1 items-center'>
                  <Star color="#F07584" size={30} />
                  <p>10/10</p>
                </div>
              </div>
              <div className='break-words flex flex-col gap-2'>
                <p className='text-[#333333] text-lg font-semibold'>
                  #AwesomeStory #Blockbuster #Wellmade
                </p>
                <p className='text-[#666666]'>
                  Demon Slayer Infinity Castle movie I AM UTTERLY SPEECHLESS. and I’m struggling to even process what I just watched
                </p>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                  <ThumbsUp color="#666666" size={16} />
                  <ThumbsDown color="#666666" size={16} />
                </div>
                <div className='flex gap-4 items-center'>
                  <p className='text-[#CECECE]'>10 days ago</p>
                  <Share2 size={20} color="#666666" />
                </div>
              </div>
            </div>
            <div className='px-[20px] w-[400px] py-[25px] border border-[#666666] rounded-md flex flex-col gap-4'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-1.5'>
                  <div>
                    <CircleUserRound size={45} color="#D7D7D7"/>
                  </div>
                  <div className='flex flex-col justify-center gap-0.5'>
                    <p>User 2</p>
                    <p className='text-[#666666] font-semibold text-sm'>Booked on BookMyShow</p>
                </div>
                </div>
                <div className='flex gap-1 items-center'>
                  <Star color="#F07584" size={30} />
                  <p>9.5/10</p>
                </div>
              </div>
              <div className='break-words flex flex-col gap-2'>
                <p className='text-[#333333] text-lg font-semibold'>
                  #AwesomeStory #Blockbuster #Wellmade
                </p>
                <p className='text-[#666666]'>
                  All I’ll say is that this was one of the most incredible experiences of my life.
                  All I’ll say is that this was one of the. 
                </p>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                  <ThumbsUp color="#666666" size={16} />
                  <ThumbsDown color="#666666" size={16} />
                </div>
                <div className='flex gap-4 items-center'>
                  <p className='text-[#CECECE]'>5 days ago</p>
                  <Share2 size={20} color="#666666" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
