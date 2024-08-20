import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="w-full sm:w-80 transform hover:scale-105 transition duration-600">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)} // Adjusted to ensure it works correctly
          className="h-48 w-48 sm:h-64 sm:w-64 flex justify-around mx-auto" 
          src={props.image} 
          alt=""
        />
      </Link>
      <p className="mt-1.5 mb-0 text-center text-sm sm:text-base w-48 sm:w-64 mx-auto">
        {props.name}
      </p>
      <div className="flex justify-center gap-2 sm:gap-5 mx-auto mt-2 sm:mt-0 mb-4">
        <div className="text-gray-500 text-base sm:text-lg font-semibold">
          Kshs. {props.new_price}
        </div>
        <div className="text-gray-400 text-sm sm:text-lg font-medium line-through">
          Kshs. {props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;