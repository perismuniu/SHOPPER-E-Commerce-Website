import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className="min-h-screen min-w-screen bg-orange-50 mt-0 bg-cover font-Poppins flex justify-around items-center">
        <div className="flex flex-col justify-center gap-5 leading-none">
            <h2 className="text-red-500 font-semibold text-2xl">NEW ARRIVALS ONLY</h2>
            <div>
                <div className="flex flex-row">
                    <p className="text-gray-800 text-4xl font-semibold">New</p>
                    <img className="flex items-center gap-5 w-14 h-10" src={hand_icon} alt=""/>
                </div>
                <p className="text-gray-800 text-4xl font-semibold mt-4">collections</p>
                <p className="text-gray-800 text-4xl font-semibold mt-4">for everyone</p>
            </div>
            <div >
                <button className="flex justify-center items-center gap-3.5 w-60 h-14 rounded-3xl mt-7 bg-red-500 text-white text-lg font-bold ">
                    Latest Collection
                    <img src={arrow_icon} alt=""/>
                </button>  
            </div>
        </div>

        <div>
            <img className="flex items-center justify-center flex-1 h-auto w-96 mt-24" src={hero_image} alt=""/>
        </div>
      
    </div>
  )
}

export default Hero