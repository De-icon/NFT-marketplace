
import { Avatar3, Avatar2, Avatar1 } from "@/assets/img/profilePic";
import { ImagePlaceholder13, ImagePlaceholder8, ImagePlaceholder5, HeroImage } from "@/assets/NFTs";
import PostCard from "@/components/postCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



export default function Profile() {
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
            <div>
            <div className=' w-full h-44 bg-secondary '></div>
            <div className=' w-full px-10'>
                <div className=' -mt-12 w-full flex justify-center md:justify-start  '>
                <img className=' w-28 h-28 rounded-xl border-2 border-primary' src={HeroImage} alt="profile picture" />
            </div>
            <div className=' flex flex-col md:flex-row space-y-2 md:space-y-0 justify-center sm:justify-start md:justify-between mt-10 mb-10'>
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl">AnimaKid</h1>
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className=" text-lg">Edit profile</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className=" text-white">Edit profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                        Username
                        </Label>
                        <Input id="name" placeholder="eg. @deicons" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Bio
                        </Label>
                        <Input id="username" placeholder=" a littel about yourself" className="col-span-3" />
                      </div>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>

            </div>
            <div className="flex justify-between md:justify-start md:space-x-16 items-center font-SpaceMono mb-10">
                    <div>
                        <h2 className="font-bold text-xl md:text-2xl">240k+</h2>
                        <p className='font-WorkSans text-xl '>Total sale</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl md:text-2xl">100k+</h2>
                        <p className='font-WorkSans text-xl '>NFT sold</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl md:text-2xl">240k+</h2>
                        <p className='font-WorkSans text-xl '>Follows</p>
                    </div>
            </div>
            <div>
                <p className="font-SpaceMono text-neutral-300 text-lg">Bio</p>
                <p className="font-WorkSans">The internet friendlist designer kid.</p>
            </div>

              </div>
          </div>
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
