import React, { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../item/Item'

const ShopCategory = (props) => {

  const {all_products} = useContext(ShopContext)

  return (
    <div className="font-Poppins">
      <img src={props.banner} alt="Banners" className="block my-8 mx-8 w-11/12"/>
      <div className="flex my-0 mx-8 justify-between items-center">
        <p>
          <span className="font-bold">Showing 1 -12</span> out of 36 products
        </p>
      <div className="py-2.5 px-5 rounded-3xl border border-gray-500 flex">
        Sort by <img className="ml-2 h-3 w-3 my-auto" src={dropdown_icon} alt=""/>
      </div>
      </div>
      <div className="mt-14 gap-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {all_products.map((item, i)=>{
          if (props.category===item.category) {
            return <Item 
                      key={i} 
                      id={item.id} 
                      name={item.name}
                      image={item.image}
                      new_price={item.new_price}
                      old_price={item.old_price}
                    />
              }
              else {
                return null
              }
        })}
      </div>
      <div className="flex justify-center items-center mx-auto my-40 w-60 h-20 rounded-full bg-gray-100 font-bold text-lg">
        <button>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory
