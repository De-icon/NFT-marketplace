
import { useState, } from "react";
import { ImagePlaceholder6, ImagePlaceholder7, ImagePlaceholder13} from '@/assets/NFTs'
import { Avatar2 } from "@/assets/img/profilePic";




export default function TrendingCollection() {
const [cards, setCards] = useState([1, 2, 3])

  return (
    <div className=' mt-20 w-full'>
      <div className='flex flex-col space-y-4 mb-12'>
        <h1 className=' text-4xl md:text-6xl font-bold font-WorkSans'>Trending Collection</h1>
        <p className=' font-WorkSans'>Checkout our weekly updated trending collection.</p>
      </div>

      <div className=' w-full flex space-x-10 items-center'>
                  {cards.slice(0, window.innerWidth <= 480 ? 1 : window.innerWidth <= 840 ? 2 : window.innerWidth <= 1028 ? 3 : cards.length).map((index) => (
                    <div key={index} className=' flex flex-col space-y-5 ml-3' >
                      <div>
                        <img className=' w-full rounded-3xl' src={ImagePlaceholder13} alt="NFT" />
                      </div>
          
                      <div className=' flex space-x-5 items-center'>
                        <div><img className=' w-28 h-28 rounded-3xl' src={ImagePlaceholder7} /></div>
                        <div><img className=' w-28 h-28 rounded-3xl' src={ImagePlaceholder6} /></div>
                        <div className=' w-28 h-28 rounded-3xl flex bg-primary items-center justify-center hover:cursor-pointer hover:bg-secondary'> <p className=' font-SpaceMono font-bold text-xl'>+1808</p></div>
                      </div>
                      <div className='flex flex-col space-y-1'>
                        <p className='font-WorkSans text-xl'>DSGN Animals</p>
                        <div className=' flex space-x-2 items-center'>
                          <img className=' w-8 h-8 rounded-full' src={Avatar2} alt="profile picture" />
                          <p>MrFox</p>
                        </div>
                      </div>
                  </div>
                  ))}
      </div>

    </div>
  )
}
