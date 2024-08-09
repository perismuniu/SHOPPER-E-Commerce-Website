import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import ProductDisplay from '../productdisplay/ProductDisplay'

const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams() //To get productId
  const product = all_products.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product} />     
    </div>
  )
}

export default Product
