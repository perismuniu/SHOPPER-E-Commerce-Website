import { createContext, useEffect, useState } from 'react';

// Create a context to be shared across the component tree
export const ShopContext = createContext(null);

// Initialize the cart with default values (all products have a quantity of 0)
const getDefaultCart = () => {
    let cart = {}
    // Assuming there are 300 products, initialize each product with a quantity of 0 in the cart
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0      
    }
    return cart
}

// Context provider component
const ShopContextProvider = (props) => {

    // State to store all products fetched from the backend
    const [all_products, setAll_Products] = useState([]);

     // State to manage cart items using the default cart structure
    const [cartItems,setCartItems] = useState(getDefaultCart()); // empty cart

    // Fetch all products from the backend when the component mounts
    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Products(data))

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[]);

    // Function to add an item to the cart (increments the quantity by 1)
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({ itemId }),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    // Function to remove an item from the cart (decrements the quantity by 1)
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({ itemId }),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    // Function to calculate the total amount in the cart
    // This is based on the quantity of each product and its price
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

    // Function to calculate the total number of items in the cart
    const getTotalCartItems = () => { //Accessible via the navbar
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem
    }

    const contextValue = {
            getTotalCartItems,
            getTotalCartAmount,
            all_products,
            cartItems,
            addToCart,
            removeFromCart
        };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;