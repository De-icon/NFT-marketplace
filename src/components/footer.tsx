import { Logo, TwitterLogo, InstagramLogo, DiscordLogo, YoutubeLogo } from "@/assets/img/icons";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <div className=" mt-20 p-10 bg-secondary">
    <div className="  font-WorkSans grid md:grid-cols-3 gap-5 md:gap-18">
        <div className=" flex flex-col space-y-3">
            <img className="w-52 cursor-pointer" src={Logo} alt="Logo" />
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join My Community</p>
            <div className=" flex space-x-2">
                <img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent" src={DiscordLogo} />
                <img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent" src={YoutubeLogo} />
                <img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent" src={TwitterLogo} />
                <img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent" src={InstagramLogo} />
            </div>
        </div>
        <div className=" flex flex-col space-y-3 ">
            <h2 className=" font-SpaceMono font-bold text-lg">Explor</h2>
            <p>Marketplace</p>
            <p>Ranking</p>
            <p>Connect a Wallet</p>
        </div>
        <div>
            <div className=" mb-2">
                <h2 className=" font-WorkSans font-bold text-xl md:text-2xl mb-4">Join our weekly digest</h2>
                <p>Get exclusive promotions & updates straight to your inbox.</p>
            </div>
            <div className=" flex flex-col space-y-4 md:space-y-0 md:flex-row md:bg-white md:rounded-2xl overflow-hidden items-center">
                <Input type="email" placeholder="enter your email here" />
                <AlertDialog>
                    <AlertDialogTrigger className=" bg-primary p-3 rounded-2xl w-full " >
                        Subscribe
                    </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Thank You ❣️</AlertDialogTitle>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </div>
        </div>
    </div>
        <div className=" font-WorkSans text-center border-t-2 my-5 p-2">
            <p>Ⓒ NFT Market. Design from the figma community</p>
        </div>
    </div>
  )
}
