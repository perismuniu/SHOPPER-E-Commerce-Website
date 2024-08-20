import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className="h-[600px] bg-orange-50 flex flex-col md:flex-row font-Poppins px-20 mx-auto">
        <div className="flex-1 flex flex-col justify-center gap-4 px-6 md:pl-[80px] leading-5 text-center md:text-left">
            <h2 className="text-red-500 text-[18px] sm:text-[22px] md:text-[26px] font-semibold">NEW ARRIVALS ONLY</h2>
            <div>
                <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 md:gap-[20px] mb-4 sm:mb-5">
                    <p className="text-gray-800 text-[24px] sm:text-[30px] md:text-[25px] font-semibold">NEW</p>
                    <img className="w-[30px] h-[25px] sm:w-[50px] sm:h-[40px] md:w-[60px] md:h-[50px]" src={hand_icon} alt=""/>
                </div>
                <p className="text-gray-800 text-[25px] sm:text-[30px] md:text-[25px] font-semibold mb-4 sm:mb-6 md:mb-10">
                    COLLECTIONS
                </p>
                <p className="text-gray-800 text-[25px] sm:text-[30px] md:text-[25px] font-semibold mb-6 sm:mb-8 md:mb-10">
                    FOR EVERYONE
                </p>
            </div>
            <div className="flex justify-center sm:justify-start">
                <button className="flex justify-center items-center gap-3 sm:gap-4 md:gap-4 w-40 sm:w-44 md:w-48 h-10 sm:h-12 md:h-14 rounded-3xl bg-red-500 text-white text-sm sm:text-base md:text-[15px] font-bold">
                    Latest Collection
                    <img className="w-4 sm:w-5 md:w-6" src={arrow_icon} alt=""/>
                </button>  
            </div>
        </div>

        <div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-0">
            <img 
                className="h-[250px] sm:h-[400px] md:h-[600px] object-cover hidden sm:block" 
                src={hero_image} 
                alt=""
            />
        </div>
    </div>
  )
}

export default Hero;