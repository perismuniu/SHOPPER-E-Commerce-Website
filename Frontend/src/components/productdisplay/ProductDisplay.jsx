import { useContext } from 'react';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext); // use for ADD TO CART button

    return (
        <div className="font-Poppins flex flex-col my-2 mx-2 sm:mx-auto md:mx-16 lg:mx-[170px] sm:flex-row">
            {/* Left Section: Product Images */}
            <div className="flex flex-col-reverse gap-5 sm:gap-5 w-full mb-5 ml-16">
                {/* Smaller Product Thumbnails */}
                <div className="flex flex-row gap-2 sm:gap-3">
                    <img className="h-28 w-28 sm:h-26 sm:w-[43px] md:h-[108px] md:w-[86px] lg:h-[163px] lg:w-[130px]" src={product.image} alt="" />
                    <img className="h-28 w-28 sm:h-36 sm:w-[43px] md:h-[108px] md:w-[86px] lg:h-[163px] lg:w-[130px] ml-1" src={product.image} alt="" />
                    <img className="h-28 w-28 sm:h-36 sm:w-[43px] md:h-[108px] md:w-[86px] lg:h-[163px] lg:w-[130px] ml-1" src={product.image} alt="" />
                    <img className="h-28 w-28 sm:h-36 sm:w-[43px] md:h-[108px] md:w-[86px] lg:h-[163px] lg:w-[130px] ml-1" src={product.image} alt="" />
                </div>
                {/* Main Product Image */}
                <div>
                    <img className="w-10/12 h-80 sm:h-64 md:h-96 lg:w-[569px] lg:h-[700px] md:w-11/12 mt-2" src={product.image} alt="" />
                </div>
            </div>

            {/* Right Section: Product Details */}
            <div className="flex flex-col my-2 sm:my-4 lg:my-0 lg:mx-[70px] w-9/12 sm:mt-5 ml-16">
                {/* Product Name */}
                <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-[25px] text-gray-600 ">
                    {product.name}
                </h1>
                
                {/* Star Rating */}
                <div className="flex items-center mt-1 sm:mt-2 lg:mt-[13px] gap-1 sm:gap-2 md:gap-3 text-gray-600 text-xs sm:text-sm md:text-base">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                {/* Price Section */}
                <div className="flex my-2 sm:my-4 lg:my-[40px] gap-2 sm:gap-4 text-sm sm:text-lg md:text-xl font-bold">
                    <div className="text-gray-600 line-through">${product.old_price}</div>
                    <div className="text-red-500 ml-4">${product.new_price}</div>
                </div>

                {/* Product Description */}
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
                    A lightweight, usually knitted, pullover shirt, close-fitting with a round neckline and short sleeves.
                </div>

                {/* Size Selection */}
                <div>
                    <h1 className="font-semibold text-sm sm:text-lg lg:text-[20px] mt-4 sm:mt-8 lg:mt-[55px] text-gray-600">Select Size</h1>
                    <div className="flex my-2 sm:my-4 lg:my-[30px] gap-2 sm:gap-4 lg:gap-[20px]">
                        <div className="py-1 px-2 sm:py-3 sm:px-6 bg-gray-100 border border-solid border-gray-200 rounded-md cursor-pointer ">S</div>
                        <div className="py-1 px-2 sm:py-3 sm:px-6 bg-gray-100 border border-solid border-gray-200 rounded-md cursor-pointer">M</div>
                        <div className="py-1 px-2 sm:py-3 sm:px-6 bg-gray-100 border border-solid border-gray-200 rounded-md cursor-pointer">L</div>
                        <div className="py-1 px-2 sm:py-3 sm:px-6 bg-gray-100 border border-solid border-gray-200 rounded-md cursor-pointer">XL</div>
                        <div className="py-1 px-2 sm:py-3 sm:px-6 bg-gray-100 border border-solid border-gray-200 rounded-md cursor-pointer">XXL</div>
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                    onClick={() => { addToCart(product.id) }}
                    className='py-2 sm:py-3 lg:py-[20px] px-4 sm:px-6 lg:px-[40px] w-24 sm:w-40 lg:w-[200px] text-sm sm:text-base lg:text-[16px] font-semibold text-white bg-red-500 mb-2 sm:mb-4 lg:mb-[40px] border-none outline-none cursor-pointer'>
                    ADD TO CART
                </button>

                {/* Category and Tags */}
                <p className="mt-2 text-xs sm:text-sm"><span className='font-semibold'>Category: </span> Women, T-shirt, Crop Top</p>
                <p className="text-xs sm:text-sm"><span className='font-semibold'>Tags: </span> Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;