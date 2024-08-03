import new_collection from '../assets/new_collections'
import Item from '../item/Item'

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center h-90vh ">
        <h1 className="text-gray-600 font-semibold text-2xl mt-5">NEW COLLECTIONS</h1>
        <hr className="w-64 rounded-lg border-gray-600 border-2"/>
        <div className="mt-14  gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {new_collection.map((item, i)=>{
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

export default NewCollections
