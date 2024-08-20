const LoginSignup = () => {
  return (
    <div className="w-full h-[600px] bg-cover bg-center bg-orange-50 mx-auto flex justify-center items-center font-Poppins">
      <div className="w-6/12 sm:w-[400px] md:w-[580px] h-auto sm:h-[500px] md:h-[500px] bg-white py-4 px-11 sm:px-12 md:px-16 my-auto mx-auto ">
        <h1 className="mx-auto text-sm sm:text-lg md:text-xl font-bold pl-8">Sign Up</h1>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8 mx-auto pl-6">
          <input 
            className="h-8 sm:h-10 md:h-12 w-11/12 pl-3 sm:pl-4 md:pl-5 border border-gray-300 rounded-md outline-none text-xs sm:text-sm md:text-base" 
            type="text" 
            placeholder="Your Name"
          />
          <input 
            className="h-8 sm:h-10 md:h-12 w-11/12 pl-3 sm:pl-4 md:pl-5 border border-gray-300 rounded-md outline-none  text-xs sm:text-sm md:text-base " 
            type="email" 
            placeholder="Email Address"
          />
          <input 
            className="h-8 sm:h-10 md:h-12 w-11/12 pl-3 sm:pl-4 md:pl-5 border border-gray-300 rounded-md outline-none text-xs sm:text-sm md:text-base " 
            type="password" 
            placeholder="Password"
          />
        </div>
        <div className="pl-6">
          <button 
            className="w-11/12 h-8 sm:h-10 md:h-12 text-xs sm:text-sm md:text-base text-white bg-red-500 rounded-md font-bold cursor-pointer hover:bg-red-600 transition-colors duration-200">
            Continue
          </button>
        </div>
        <p className="mt-4 text-gray-500 font-medium text-xs sm:text-sm md:text-base w-9/12 ml-11">
          Already have an account? <span className="text-red-500 font-semibold cursor-pointer hover:underline">Login here</span>
        </p>
        <div className="flex mt-2 gap-2 text-gray-500 text-xs sm:text-sm md:text-base font-medium w-10/12 ml-6">
          <input type="checkbox" id="terms" className=""/>
          <label htmlFor="terms" className="mt-1">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;