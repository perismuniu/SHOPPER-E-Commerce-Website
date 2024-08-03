import exclusive_image from '../assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="min-h-screen min-w-screen bg-orange-50 bg-cover font-Poppins flex items-center justify-around">
      <div className="flex flex-col justify-center leading-none">
        <h1 className="text-red-500 font-semibold text-2xl">Exclusive</h1>
        <h1 className="text-red-500 font-semibold text-2xl">Offers For You</h1>
        <p className="text-gray-800 text-2xl font-semibold mt-4">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="flex justify-center items-center gap-2 sm:gap-3.5 w-48 sm:w-60 h-12 sm:h-14 rounded-3xl mt-5 sm:mt-7 bg-red-500 text-white text-base sm:text-lg font-bold">Check Now</button>
      </div>
      <div>
        <img className="flex items-center justify-center flex-1 h-auto w-96 mt-2" src={exclusive_image} alt=""/>

      </div>
    </div>
  )
}

export default Offers
