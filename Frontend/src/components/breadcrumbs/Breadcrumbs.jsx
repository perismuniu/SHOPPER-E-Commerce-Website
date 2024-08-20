import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
    const { product } = props;

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="font-Poppins flex items-center gap-[8px] text-[12px] sm:text-[14px] md:text-[16px] text-gray-600 font-semibold my-[40px] sm:my-[50px] md:my-[60px] mx-[20px] sm:mx-[60px] md:mx-[170px] capitalize">
            HOME <img src={arrow_icon} alt="arrow_icon" />
            SHOP <img src={arrow_icon} alt="arrow_icon" />
            {product.category} <img src={arrow_icon} alt="arrow_icon" />
            {product.name}
        </div>
    )
}

export default Breadcrumbs;