import data_product from '../assets/data.js'
import Item from '../item/Item.jsx'

const Popular = () => {
  return (
    <div className="flex flex-col items-center h-90vh">
      <h1 className="text-gray-600 font-semibold text-2xl mt-5">POPULAR IN WOMEN</h1>
      <hr className="w-64 rounded-lg border-gray-600 border-2"/>
      <div className="mt-14 flex gap-6 ">
        {data_product.map((item, i) => {
            return <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
        })}
      </div>
    </div>
  )
}

export default Popular