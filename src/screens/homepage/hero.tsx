import { Button } from "@/components/ui/button";
import {RocketLaunch} from "@/assets/img/icons/index"
import { HeroImage } from "@/assets/NFTs";
import { Avatar1 } from "@/assets/img/profilePic";


export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
        <div className="w-full">
            <div className="flex flex-col space-y-6">
                <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold font-WorkSans">Discover Digital Act & COllect NFTs</h1>
                <p className="font-SpaceMono">NFT Marketplace Created With Anima For Figma Collect. Buy And Sell Art From More Then 20K NFT Artists.</p>
                <Button className="p-5 md:p-7 w-full md:w-64 text-xl md:text-2xl"><img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent" src={RocketLaunch} /> Get Stated</Button>
                <div className="flex justify-between md:justify-start md:space-x-16 items-center font-SpaceMono">
                    <div>
                        <h2 className="font-bold text-2xl md:text-3xl">240k+</h2>
                        <p className='font-WorkSans text-xl '>Total sale</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl md:text-3xl">100k+</h2>
                        <p className='font-WorkSans text-xl '>Auctions</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl md:text-3xl">240k+</h2>
                        <p className='font-WorkSans text-xl '>Artists</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="w-full">
            <div className="bg-secondary rounded-[1.5rem] shadow-xl">
                <img src={HeroImage} className="w-full" />
                <div className="flex flex-col space-y-2 p-5 font-WorkSans">
                    <h2 className="text-xl md:text-2xl font-bold">Space Walking</h2>
                    <div className="flex space-x-2 items-center">
                        <img className="w-8 h-8 md:w-10 md:h-10 bg-transparent" src={Avatar1} />
                        <p className="text-lg md:text-xl">Animakid</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}