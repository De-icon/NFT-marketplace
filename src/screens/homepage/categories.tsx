
import { PaintBrush, PaintBrushImage, Basketball, Camera, CameraImage,
    MagicWand, MagicWandImage, MusicNotes, MusicNotesImage, Planet, PlanetImage, Swatches, SwatchesImage, VideoCamera, VideoCameraImage
  } from "@/assets/img/cartigoryIcons";



const categories = [
    {
        name: "Art",
        icon: PaintBrush,
        image: PaintBrushImage,
    },
    {
        name: "Collectibles",
        icon: Basketball,
        image: CameraImage,
    },
    {
        name: "Photography",
        icon: Camera,
        image: CameraImage,
    },
    {
        name: "Music",
        icon: MusicNotes,
        image: MusicNotesImage,
    },
    {
        name: "Utility",
        icon: MagicWand,
        image: MagicWandImage,
    },
    {
        name: "Virtual World",
        icon: Planet,
        image: PlanetImage,
    },
    {
        name: "Sports",
        icon: Swatches,
        image: SwatchesImage,
    },
    {
        name: "Video",
        icon: VideoCamera,
        image: VideoCameraImage,
    },
]

export default function Categories() {
  return (
    <div className='  mt-20 w-full'>
        <div >
            <h1 className=' text-4xl md:text-6xl font-bold font-WorkSans'>Browes Categories</h1>
            
        </div>
        <div className=" mt-10 grid md:grid-cols-4 gap-5">
            {categories.map((category, index) => (
                <div key={index} className=' bg-secondary rounded-3xl shadow-xl overflow-hidden'>
                    <div className=" relative w-full h-2/2">
                        <div className="absolute w-full h-full flex items-center justify-center  backdrop-blur-sm opacity-100 hover:opacity-0 transition-opacity duration-300">
                            <img className="w-1/3 h-1/3 left-[50%] top-[50%]" src={category.icon}/>
                        </div>
                        <img className=" w-full h-full" src={category.image} />
                    </div>
                    <div className="p-4">
                        <p className=" text-2xl font-WorkSans">{category.name}</p>
                    </div>
            </div>
            ))}
        </div>
        
    </div>
  )
}
