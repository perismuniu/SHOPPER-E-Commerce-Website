import { useEffect, useState } from 'react';
import './ListProduct.css'
import cross_icon from '../../assets/Admin_Assets/cross_icon.png'

const ListProduct = () => {

   // State to hold the list of products fetched from the server
  const [allproducts,setAllProducts] = useState([]);

   // Function to fetch product data from the server
  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  // useEffect to fetch product data when the component mounts
  useEffect(()=>{
    fetchInfo();
  },[]); // useEffect to fetch product data when the component mounts

  // Function to remove a product by its ID
  const remove_product = async (id) => {
    await fetch('http://localhost:4000/removeproduct',{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id:id })
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>

      <h1 className='text-2xl font-bold'>All Products List</h1>

      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />
        {/* Mapping through the fetched products and rendering each one */}
        {allproducts.map((product,index)=>{
          return <> <div 
                      key={index} 
                      className='listproduct-format-main listproduct-format'>
                      <img src={product.image} alt="Product Image" className="list-product-icon" />
                      <p>{product.name}</p>
                      <p>${product.old_price}</p>
                      <p>${product.new_price}</p>
                      <p>{product.category}</p>
                      <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="Remove Icon" className='listproduct-remove-icon' />
                    </div>
                    <hr />
                </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
