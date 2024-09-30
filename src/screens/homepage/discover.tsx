import PostCard from "@/components/postCard";
import { Avatar1, Avatar2, Avatar3, } from "@/assets/img/profilePic";
import { ImagePlaceholder13, ImagePlaceholder5, ImagePlaceholder8 } from "@/assets/NFTs";
import { Button } from "@/components/ui/button";
import { Eye } from "@/assets/img/icons";



export default function Discover () {
    
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
            profile: Avatar2,
            image: ImagePlaceholder8,
        },
        {
            title: "Distant Galaxy",
            creator: "MoonDancer",
            price: "1.63 ETH",
            highestBid: "0.33 wETH",
            profile: Avatar3,
            image: ImagePlaceholder13,
        }


    ]

    return(
        <div>
            <div className="flex justify-between items-center mb-10">
                <div className='flex flex-col space-y-4 mt-20'>
                    <h1 className=' text-4xl md:text-6xl font-bold font-WorkSans'>Discover More NFTs</h1>
                    <p className=' font-WorkSans'>Explore new trending NFTs</p>
                </div>
                <Button variant="outline" className="p-5 md:p-7 w-full md:w-64 text-xl hidden md:flex md:text-2xl items-center"><img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent " src={Eye} /> See All</Button>
            </div>
            
            <div className=' mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {card.map((card) => (
                    <PostCard title={card.title} creator={card.creator} price={card.price} highestBid={card.highestBid} image={card.image} profile={card.profile} />
                ))}
            </div>
            <div className=" mt-5">
                <Button variant="outline" className="p-7 md:p-7 w-full md:w-64 text-xl md:hidden md:text-2xl"><img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent" src={Eye} /> See All</Button>
            </div>
        </div>
    )
}