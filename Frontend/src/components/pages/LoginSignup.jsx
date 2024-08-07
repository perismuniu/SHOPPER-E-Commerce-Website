

const LoginSignup = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center bg-orange-50 mx-auto flex justify-center font-Poppins">
      <div className="w-[580px] h-[500px] bg-white py-5 px-16 my-auto">
        <h1 className="mx-auto text-xl font-bold">Sign Up</h1>
        <div className="flex flex-col gap-8 mt-8 mb-8">
          <input className="h-[50px] w-full pl-5 border-4 border-gray-100 outline-none text-xl bg-transparent" type="text" placeholder="Your Name"/>
          <input className="h-[50px] w-full pl-5 border-4 border-gray-100 outline-none text-xl" type="email" placeholder="Email Address"/>
          <input className="h-[50px] w-full pl-5 border-4 border-gray-100 outline-none text-xl" type="password" placeholder="Password"/>
        </div>
        <button className="w-full h-[50px] text-white bg-red-500 border-none text-xl font-bold cursor-pointer ">Continue</button>
        <p className="mt-4 text-gray-500 font-medium text-base">Already have an account? <span className="text-red-500 font-semibold cursor-pointer">Login here</span></p>
        <div className="flex mt-1 gap-2 text-gray-500 text-base font-medium">
          <input type="checkbox" name="" id=""/>
          <p className="mt-4">By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
