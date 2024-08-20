import data_product from '../assets/data';
import Item from '../item/Item';

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 h-auto">
      <h1 className="text-gray-600 text-2xl md:text-4xl lg:text-5xl font-semibold text-center">Related Products</h1>
      <hr className="w-[100px] md:w-[150px] lg:w-[200px] h-[4px] md:h-[5px] lg:h-[6px] rounded-xl bg-gray-600" />
      <div className="mt-8 md:mt-10 lg:mt-12 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              // Pass screen size specific styles to Item component
              className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
              nameClassName="text-sm md:text-base lg:text-lg"
              priceClassName="text-sm md:text-base lg:text-lg"
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;