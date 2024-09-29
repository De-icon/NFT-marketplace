import { Avatar6 } from "@/assets/img/profilePic"
import { useState } from "react"
import { Button } from "@/components/ui/button";
import {RocketLaunch} from "@/assets/img/icons/index"

interface Buttonprops {
    variant: string
}

export default function TopCreators({variant}: Buttonprops) {
    const [card, setCard] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
  return (
    <div className=' mt-20 w-full'>
        <div className="flex justify-between items-center">
            <div className='flex flex-col space-y-4 mb-12'>
                <h1 className=' text-4xl md:text-6xl font-bold font-WorkSans'>Top creators</h1>
                <p className=' font-WorkSans'>Checkout Top Rated Creators on the NFT Marketplace.</p>
            </div>
            <Button variant="outline" className="p-5 md:p-7 w-full md:w-64 text-xl hidden md:flex md:text-2xl"><img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent " src={RocketLaunch} /> View Ranking</Button>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {card.slice(0, window.innerWidth <= 480 ? 4 : window.innerWidth <= 840 ? 8 : window.innerWidth <= 1028 ? 12 : card.length).map((index) => (
                <div key={index} className=" relative flex space-x-2 bg-secondary p-5 rounded-xl lg:items-center lg:justify-center">
                    <p className=" lg:left-3 lg:top-3 font-SpaceMono p-2 bg-background text-[#858584] absolute rounded-full">{index + 1}</p>
                    <div className=" flex items-center space-x-3 lg:flex-col ">
                        <img className=' w-20 h-20 rounded-full' src={Avatar6} alt="profile picture" />
                        <div className=" flex flex-col space-y-1 items-start justify-center lg:items-center">
                            <p className=" font-WorkSans text-xl" >Keepitreal</p>
                            <p className="font-WorkSans text-[#858584] ">Total Sales: <span className=" font-SpaceMono" >34.53 ETH</span></p> 
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className=" mt-5">
            <Button variant="outline" className="p-7 md:p-7 w-full md:w-64 text-xl md:hidden md:text-2xl"><img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent" src={RocketLaunch} /> View Ranking</Button>
        </div>
    </div>
  )
}
