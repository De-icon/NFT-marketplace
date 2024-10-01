import { Avatar6, Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar7, Avatar8, Avatar9, Avatar10, Avatar11 } from "@/assets/img/profilePic"

import { Button } from "@/components/ui/button";
import {RocketLaunch} from "@/assets/img/icons/index"


export default function TopCreators() {
    

    const cards = [
        {
            name: "MoonDancer",
            image: Avatar1,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
        {
            name: "MoonDancer",
            image: Avatar2,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
        {
            name: "MoonDancer",
            image: Avatar3,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
        {
            name: "MoonDancer",
            image: Avatar4,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
        {
            name: "MoonDancer",
            image: Avatar5,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
        {
            name: "MoonDancer",
            image: Avatar6,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
        {
            name: "MoonDancer",
            image: Avatar7,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
        {
            name: "MoonDancer",
            image: Avatar8,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
        {
            name: "MoonDancer",
            image: Avatar9,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
        {
            name: "MoonDancer",
            image: Avatar10,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
        {
            name: "MoonDancer",
            image: Avatar11,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
        {
            name: "MoonDancer",
            image: Avatar11,
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
        },
    ]


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
            {cards.slice(0, window.innerWidth <= 480 ? 4 : window.innerWidth <= 840 ? 8 : window.innerWidth <= 1028 ? 12 : cards.length).map((card, index) => (
                <div key={index} className=" relative flex space-x-2 bg-secondary p-5 rounded-xl lg:items-center lg:justify-center">
                    <p className=" lg:left-3 lg:top-3 font-SpaceMono p-2 bg-background text-[#858584] absolute rounded-full">{index + 1}</p>
                    <div className=" flex items-center space-x-3 lg:flex-col ">
                        <img className=' w-20 h-20 rounded-full' src={card.image} alt="profile picture" />
                        <div className=" flex flex-col space-y-1 items-start justify-center lg:items-center">
                            <p className=" font-WorkSans text-xl" >{card.name}</p>
                            <p className="font-WorkSans text-[#858584] ">Total Sales: <span className=" font-SpaceMono" >{card.highestBid}</span></p> 
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
