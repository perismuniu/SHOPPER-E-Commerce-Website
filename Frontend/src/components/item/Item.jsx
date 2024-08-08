import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="w-80 transform hover:scale-105 transition duration-600">
      <Link to={`/product/${props.id}`}>
        <img 
          className="h-64 w-64 flex justify-around mx-auto" 
          src={props.image} 
          alt=""
        />
      </Link>
      <p className="mt-1.5 mb-0 w-64 mx-auto">{props.name}</p>
      <div className="flex gap-5 mx-auto">
        <div className="text-gray-500 text-lg font-semibold ml-8">
            Kshs. {props.new_price}
        </div>
        <div className="text-gray-400 text-lg font-medium line-through">
            Kshs. {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item