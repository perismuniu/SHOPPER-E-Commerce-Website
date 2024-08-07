const NewsLetter = () => {
  return (
    <div className="h-40vh flex flex-col items-center justify-center m-auto py-0 px-36 bg-orange-50 mb-40 gap-8 min-w-screen">
      <h1 className="text-red-500 font-semibold text-2xl">Get Exclusive Offers On Your Email</h1>
      <p className="text-gray-600 text-base ">Subscribe to our newsletter and stay updated</p>
      <div className="flex items-center justify-between bg-white h-12 w-720 rounded-lg border-gray-400">
        <input 
            className="w-500 ml-8 border-none outline-none text-gray-500 font-Poppins text-base h-12" 
            type="email" 
            placeholder="Your email id"
         />
        <button className="w-210 rounded-3xl bg-black text-white text-base cursor-pointer h-12 font-bold" >Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
