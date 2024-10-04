import { Avatar3, Avatar2, Avatar1 } from "@/assets/img/profilePic";
import { ImagePlaceholder13, ImagePlaceholder8, ImagePlaceholder5 } from "@/assets/NFTs";
import PostCard from "@/components/postCard";
import UserProfile from "@/components/userProfile";

export default function UserProfilePage() {
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
    return (
        <div>
            <UserProfile />
            <div className=" p-10 w-full">
                <div className=" bg-secondary p-5">
                    <h1 className="font-bold text-2xl md:text-3xl text-center">Created</h1>
                </div>
                <div className=' mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {card.map((card) => (
                    <PostCard title={card.title} creator={card.creator} price={card.price} highestBid={card.highestBid} image={card.image} profile={card.profile} />
                ))}
                </div>
            </div>
        </div>
    )
}