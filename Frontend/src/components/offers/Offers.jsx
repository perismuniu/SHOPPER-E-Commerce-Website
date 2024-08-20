import exclusive_image from '../assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="flex flex-row md:flex-row bg-orange-50 mx-auto w-full max-w-6xl p-4 md:p-8">
      <div className="flex-1 flex flex-col justify-center gap-4 px-4 md:px-8 text-center md:text-left">
        <h2 className="text-red-500 text-xl sm:text-2xl md:text-3xl font-semibold">
          EXCLUSIVE
        </h2>
        <h2 className="text-red-500 text-xl sm:text-2xl md:text-3xl font-semibold">
          OFFERS FOR YOU
        </h2>
        <p className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-semibold mt-4 mb-1">
          ONLY ON BEST
        </p>
        <p className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-semibold mt-4 md:mb-4">
          SELLERS PRODUCTS
        </p>
        <div className="flex justify-center md:justify-start mt-5 md:mt-7">
          <button className="flex items-center justify-center gap-3 sm:gap-4 md:gap-4 w-36 sm:w-40 md:w-48 h-10 sm:h-12 md:h-14 rounded-3xl bg-red-500 text-white text-sm sm:text-base md:text-lg font-bold">
            Check Now
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 md:mt-0">
        <img 
          className="h-[250px] sm:h-[300px] md:h-[600px] object-cover" 
          src={exclusive_image} 
          alt="Exclusive Offers"
        />
      </div>
    </div>
  )
}

export default Offers;