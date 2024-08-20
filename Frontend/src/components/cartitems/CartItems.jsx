import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="my-10 mx-5 sm:my-[50px] sm:mx-[20px] md:mx-[50px] lg:my-[100px] lg:mx-[170px] font-Poppins">
            <div className="grid grid-cols-6 items-center gap-1 sm:gap-4 py-3 text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                <p className="">Products</p>
                <p className="">Title</p>
                <p className="">Price</p>
                <p className="">Quantity</p>
                <p className="">Total</p>
                <p className="ml-5">Remove</p>
            </div>
            <hr className="h-[2px] bg-gray-200 border-0" />

            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                            <div key={e.id}>
                              <div className="grid grid-cols-6 sm:grid-cols-6 items-center gap-2 sm:gap-5 py-3 text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                                  <img className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={e.image} alt={e.name} />
                                  <p className="">{e.name}</p>
                                  <p className="">${e.new_price}</p>
                                  <button className="w-10 h-8 md:w-14 md:h-10 lg:w-16 lg:h-12 border-[1px] sm:border-[2px] border-gray-300 bg-white text-center">{cartItems[e.id]}</button>
                                  <p className="">${e.new_price * cartItems[e.id]}</p>
                                  <img className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer mx-auto" src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove" />
                              </div>
                              <hr />
                            </div>
                    );
                }
                return null;
            })}

            <div className="flex flex-col md:flex-row my-10 lg:my-[100px] gap-5">
                <div className="flex flex-1 flex-col gap-4 md:gap-6">
                    <h1 className="font-semibold text-base sm:text-lg md:text-xl lg:text-[25px]">Cart Totals</h1>
                    <div>
                        <div className="flex justify-between py-2">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-2">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-2">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className="w-full md:w-[180px] lg:w-[262px] h-10 sm:h-12 md:h-[48px] lg:h-[58px] bg-red-500 text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold cursor-pointer">
                        PROCEED TO CHECKOUT
                    </button>
                </div>

                <div className="flex-1 mt-5">
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">If you have a promo code, enter it here</p>
                    <div className="w-full md:w-[300px] lg:w-[504px] mt-2 sm:mt-4 pl-2 sm:pl-4 md:pl-6 h-10 sm:h-12 md:h-[48px] lg:h-[58px] bg-gray-100 flex">
                        <input className="flex-1 border-none outline-none bg-transparent text-xs sm:text-sm md:text-base lg:text-lg h-full" type="text" placeholder="Promo code" />
                        <button className="w-24 md:w-[150px] h-full bg-black text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold cursor-pointer">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;