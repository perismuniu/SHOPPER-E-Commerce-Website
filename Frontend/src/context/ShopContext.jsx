import { createContext, useState } from 'react'
import all_products from '../components/assets/all_product.js'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0      
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart()) // empty cart

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => { //Accessible via the cart window
        let totalAmount = 0
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => { //Accessible via the navbar
        let totalItem = 0
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue= {getTotalCartItems,getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider