import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
    const {product} = props

    if (!product) {
      return <div>Loading...</div>;
    }

  return (
    <div className="font-Poppins flex items-center gap-[8px] text-gray-600 text-[16px] font-semibold my-[60px] mx-[170px] capitalize">
      HOME <img src={arrow_icon} alt="arrow_icon"/>
      SHOP <img src={arrow_icon} alt="arrow_icon"/>
      {product.category} <img src={arrow_icon} alt="arrow_icon"/>
      {product.name}
    </div>
  )
}

export default Breadcrumbs