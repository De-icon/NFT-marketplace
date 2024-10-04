import { Button} from "@/components/ui/button";
import { HeroImage } from '@/assets/NFTs'

export default function UserProfile() {
  return (
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
                <Button variant="outline" className=' font-WorkSans text-xl'>Follow</Button>
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
  )
}
