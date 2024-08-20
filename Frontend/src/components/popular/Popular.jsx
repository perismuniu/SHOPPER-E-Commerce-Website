import data_product from '../assets/data.js';
import Item from '../item/Item.jsx';

const Popular = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
      <h1 className="text-gray-600 text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold text-center">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[4px] sm:h-[6px] rounded-xl bg-gray-600 mt-4"/>
      <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {data_product.map((item, i) => (
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

export default Popular;