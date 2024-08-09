import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import ProductDisplay from '../productdisplay/ProductDisplay'
import DescriptionBox from '../descriptionbox/DescriptionBox'
import RelatedProducts from '../relatedproducts/RelatedProducts'

const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams() //To get productId
  const product = all_products.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product} />  
      <DescriptionBox />   
      <RelatedProducts />
    </div>
  )
}

export default Product