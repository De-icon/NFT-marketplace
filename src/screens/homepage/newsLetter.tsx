// import { Input } from "@/components/ui/input"
import {Photo} from "@/assets/img/cardIcons"
import { EnvelopeSimple } from "@/assets/img/icons"

import { Input } from "@/components/ui/input"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

export default function NewsLetter() {
  return (
    <div className=" mt-20">
        <div className=" flex flex-col md:flex-row md:space-x-4 space-y-4 items-center md:bg-secondary md:p-5 md:rounded-2xl">
            <img className=" md:w-[50%] md:h-[50%] " src={Photo}/>
            <div className=" flex flex-col space-y-5 md:p-x-6">
                <div>
                    <h2 className=" font-WorkSans font-bold text-2xl md:text-6xl mb-4">Join our weekly digest</h2>
                    <p className=" font-SpaceMono" >Get exclusive promotions & updates straight to your inbox.</p>
                </div>
                <div className=" flex flex-col space-y-4 md:space-y-0 md:flex-row md:bg-white md:rounded-2xl md:space-x-1 overflow-hidden+ items-center">
                    <Input type="email" placeholder="enter your email here" />
                    <AlertDialog>
                        <AlertDialogTrigger type="submit" className=" w-full font-WorkSans bg-primary p-3 rounded-2xl flex items-center space-x-1 justify-center " >
                        <img className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-transparent" src={EnvelopeSimple} />
                            Subscribe
                        </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>It just a demo App thanks for tring it out ❣️</AlertDialogTitle>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                </div>
            </div>
        </div>
    </div>
  )
}
