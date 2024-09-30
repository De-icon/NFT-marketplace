import { CreatCollectionicon, SetupWalleticon, StartEarningicon } from "@/assets/img/cardIcons"

export default function HowItWork() {
  return (
    <div className=" mt-20">
        <div className='flex flex-col space-y-4 mb-12'>
                <h1 className=' text-4xl md:text-6xl font-bold font-WorkSans'>How It Works</h1>
                <p className=' font-WorkSans'>Find Out How It Works.</p>
        </div>
        <div className=" grid md:grid-cols-3 gap-5">
            <div className=" bg-secondary p-5 flex space-x-3 rounded-lg items-center md:flex-col">
                <img className=" w-[30%] md:w-[50%]" src={SetupWalleticon} alt="SetupWalleticon" />
                <div className=" flex flex-col space-y-2 items-start  md:text-center">
                    <h2 className=" font-WorkSans text-2xl font-bold ">Set Your Wallet</h2>
                    <p className=" font-SpaceMono ">Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
                </div>
            </div>
            <div className=" bg-secondary p-5 flex space-x-3 rounded-lg items-center md:flex-col">
                <img className=" w-[30%] md:w-[50%]" src={SetupWalleticon} alt="SetupWalleticon" />
                <div className=" flex flex-col space-y-2 items-start  md:text-center">
                    <h2 className=" font-WorkSans text-2xl font-bold ">Set Your Wallet</h2>
                    <p className=" font-SpaceMono ">Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
                </div>
            </div>
            <div className=" bg-secondary p-5 flex space-x-3 rounded-lg items-center md:flex-col">
                <img className=" w-[30%] md:w-[50%]" src={SetupWalleticon} alt="SetupWalleticon" />
                <div className=" flex flex-col space-y-2 items-start  md:text-center">
                    <h2 className=" font-WorkSans text-2xl font-bold ">Set Your Wallet</h2>
                    <p className=" font-SpaceMono ">Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
