import { useEffect, useState } from 'react';
import Item from '../item/Item';

const NewCollections = () => {

  const [new_collection,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[]);

  return (
    <div className="flex flex-col items-center mb-28 px-4 sm:px-6 md:px-8 lg:px-12 mt-5">
      <h1 className="text-gray-600 text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold text-center">
        NEW COLLECTIONS
      </h1>
      <hr className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[4px] sm:h-[6px] rounded-xl bg-gray-600 mt-4"/>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {new_collection.map((item, i) => (
          <Item
            key={i} 
            id={item.id} 
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollections;