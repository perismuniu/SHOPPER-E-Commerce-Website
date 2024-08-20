const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 sm:py-8 sm:px-6 md:py-12 md:px-8 lg:py-16 lg:px-10 bg-orange-50 mx-auto mb-20 w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl">
      <h1 className="text-red-500 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl text-center mt-2">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center bg-white rounded-lg border border-gray-400 w-full max-w-md sm:max-w-xl lg:max-w-2xl">
        <input 
          className="w-full sm:w-3/4 border-none outline-none text-gray-500 font-Poppins text-sm sm:text-base h-12 px-4"
          type="email" 
          placeholder="Your email id"
        />
        <button className="w-full sm:w-1/4 rounded-lg bg-black text-white text-sm sm:text-base h-12 font-bold mt-4 sm:mt-0 sm:ml-4">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;