
import { Avatar1, } from "@/assets/img/profilePic";
import { ImagePlaceholder13, ImagePlaceholder5, ImagePlaceholder8 } from "@/assets/NFTs";
import CountDown from "@/components/countDown";
import PostCard from "@/components/postCard";
import { Button } from "@/components/ui/button";
import {ArrowRight} from "@/assets/img/icons"


export default function NFTprofile() {


    const card = [
        {
            title: "Distant Galaxy",
            creator: "MoonDancer",
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
            profile: Avatar1,
            image: ImagePlaceholder5,
        },
        {
            title: "Distant Galaxy",
            creator: "MoonDancer",
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
            profile: Avatar1,
            image: ImagePlaceholder8,
        },
        {
            title: "Distant Galaxy",
            creator: "MoonDancer",
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
            profile: Avatar1,
            image: ImagePlaceholder13,
        }


    ]


    return (
        <div>
            <div className=" p-10">
                <div className=" flex flex-col md:flex-row md:justify-between items-center space-y-3 md:space-y-0 mb-5">
                    <h1 className=" font-WorkSans text-4xl font-bold">The Obitians</h1>
                    <CountDown />
                </div>
                <div>
                    <h2 className=" font-SpaceMono text-gray-300 mb-2 text-2xl">Created By</h2>
                    <div className=" flex space-x-2 items-center">
                        <img className=' w-12 h-12 rounded-full' src={Avatar1} />
                        <h2 className=" font-WorkSans text-2xl font-bold">Orbitian</h2>
                    </div>
                </div>
                    <div className=" w-[100%] md:max-w-[50%] mt-5">
                        <h2 className=" font-SpaceMono text-gray-300 mb-2 text-2xl">Discribetion</h2>
                        <p>
                            The Orbitians
                            is a collection of 10,000 unique NFTs on the Ethereum blockchain,There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. They live in a metal space machines, high up in the sky and only have one foot on Earth.
                            These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-10">
                            <div className='flex flex-col space-y-4 mt-20'>
                                <h1 className=' text-4xl md:text-6xl font-bold font-WorkSans'>More From The Artist</h1>
                                
                            </div>
                            <Button variant="outline" className="p-5 md:p-7 w-full md:w-64 text-xl hidden md:flex md:text-2xl items-center"><img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent " src={ArrowRight} /> Go To Artist Page</Button>
                        </div>
                        
                        <div className=' mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                            {card.map((card) => (
                                <PostCard title={card.title} creator={card.creator} price={card.price} highestBid={card.highestBid} image={card.image} profile={card.profile} />
                            ))}
                        </div>
                        <div className=" mt-5">
                            <Button variant="outline" className="p-7 md:p-7 w-full md:w-64 text-xl md:hidden md:text-2xl"><img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent" src={ArrowRight} /> Go To Artist Page</Button>
                        </div>
                    </div>
            </div>
        </div>
    )
}