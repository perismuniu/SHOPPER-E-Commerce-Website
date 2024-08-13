import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () => {

    const {getTotalCartAmount,all_products,cartItems,removeFromCart} = useContext(ShopContext)

  return (
    <div className="my-[100px] mx-[170px] font-Poppins">
      <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] px-[0px] text-gray-600 text-[18px] font-semibold'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-[3px] bg-gray-200 border-0'/>
      {all_products.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return (
                    <div key={e.id}>
                        <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] px-[0px] text-gray-600 text-[17px] font-medium'>
                          <img src={e.image} alt=""/>
                          <p>{e.name}</p>
                          <p>${e.new_price}</p>
                          <button className='w-[64px] h-[50px] border-[2px] border-solid border-gray-300 bg-white'>{cartItems[e.id]}</button>
                          <p>${e.new_price*cartItems[e.id]}</p>
                          <img className='w-[15px] my-[0px] mx-[40px] cursor-pointer' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                        </div>
                        <hr/>
                    </div>
                    )
        }
        return null
      })}   
      <div className='flex my-[100px] mx-[0px]'>

        <div className='flex flex-1 flex-col mr-[200px] gap-[40px]'>
          <h1 className='font-semibold text-[25px]'>Cart Totals</h1>

          <div>
            <div className='flex justify-between py-[15px] px-[0px]'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='flex justify-between py-[15px] px-[0px]'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className='flex justify-between py-[15px] px-[0px]'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>

          <button className='w-[262px] h-[58px] outline-none border-none bg-red-500 text-white text-[16px] font-semibold cursor-pointer'>
            PROCEED TO CHECKOUT
          </button>

        </div>

        <div className='flex-1 text-[16px] font-medium'>
          <p className='text-gray-600'>If you have a promo code, Enter it here</p>
          <div className='w-[504px] mt-[15px] pl-[20px] h-[58px] bg-gray-100'>
            <input 
              className='border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]' 
              type='text' 
              placeholder='Promo code'
            />
            <button className='w-[150px] h-[58px] text-[16px] bg-black text-white cursor-pointer font-semibold'>Submit</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItems
