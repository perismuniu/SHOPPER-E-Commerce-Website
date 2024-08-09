import React from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className="font-Poppins flex my-[0px] mx-[170px]">

      <div className="flex gap-[17px] w-full">
        <div className="flex flex-col gap-[16px]">
            <img className="h-[163px]" src={product.image} alt=""/>
            <img className="h-[163px]" src={product.image} alt=""/>
            <img className="h-[163px]" src={product.image} alt=""/>
            <img className="h-[163px]" src={product.image} alt=""/>
        </div>
        <div className="">
        <img className="w-[586px] h-[700px]" src={product.image} alt=""/>
        </div>
      </div>

      <div className="flex flex-col my-[0px] mx-[70px]">
        <h1 className="font-bold text-[25px] text-gray-600">{product.name}</h1>
        <div className="flex items-center mt-[13px] gap-[5px] text-gray-600 font-[16px]">
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_dull_icon} alt=""/>
            <p>(122)</p>
        </div>
        <div className="flex my-[40px] mx-[0px] gap[30px] text-[24px] font-bold">
          <div className="text-gray-600 line-through ">${product.old_price}</div>
          <div className="text-red-500 ml-4">${product.new_price}</div>
        </div>
        <div>
            A lightweight, usually knitted, pullover shirt, close-fitting with a round neckline and short sleeves.
        </div>
        <div className="">
          <h1 className="font-semibold text-[20px] mt-[55px] text-gray-600 ">Select Size</h1>
          <div className="flex my-[30px] mx-[0px] gap-[20px]">
            <div className="py-[18px] px-[24px] bg-gray-100 border-[1px] border-solid border-gray-200 rounded-md cursor-pointer">S</div>
            <div className="py-[18px] px-[24px] bg-gray-100 border-[1px] border-solid border-gray-200 rounded-md cursor-pointer">M</div>
            <div className="py-[18px] px-[24px] bg-gray-100 border-[1px] border-solid border-gray-200 rounded-md cursor-pointer">L</div>
            <div className="py-[18px] px-[24px] bg-gray-100 border-[1px] border-solid border-gray-200 rounded-md cursor-pointer">XL</div>
            <div className="py-[18px] px-[24px] bg-gray-100 border-[1px] border-solid border-gray-200 rounded-md cursor-pointer">XXL</div>
          </div>
        </div>
        <button className='py-[20px] px-[40px] w-[200px] text-[16px] font-semibold text-white bg-red-500 mb-[40px] border-none outline-none cursor-pointer'>ADD TO CART</button>
        <p className="mt-[10px]"><span className='font-semibold'>Category : </span> Women, T-shirt, Crop Top</p>
        <p className=""><span className='font-semibold'>Tags : </span> Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay