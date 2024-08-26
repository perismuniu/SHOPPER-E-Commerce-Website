import './AddProduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'
import { useState } from 'react'

const AddProduct = () => {

  // State to store the uploaded product image, initially set to false
  const [image, setImage] = useState(false);

   // State to manage the details of the product being added
  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:"",
  })

  // Handle the image file input change event
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  // Handle the change event for all input fields and the select tag 
  const changeHandler = (e) => {
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
  }

   // Function to add the product to the backend
  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;  
    let product = productDetails;

    // Create a FormData object to send the image file
    let formData = new FormData();
    formData.append('product',image); // Append the selected image file

     // Send the image file to the backend and get the response
    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept: 'application/json', // Expect JSON response
      },
      body:formData,// Send the FormData object as the request body// Send the FormData object as the request body
    }).then((resp)=> resp.json()).then((data)=>{responseData=data});
    // If the image upload is successful, proceed to add the product details
    if(responseData.success)
    {
      product.image = responseData.image_url;
      console.log(product);
        // Send the complete product details to the backend
      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("Failed")
      })
    }
  }

  return (
    <div className="add-product">

      {/* Input field for the product title */}
      <div className='addproduct-itemfield'>
        <p className='mb-[20px]'>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here'/>
      </div>

        {/* Input fields for the product prices */}
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p className='mb-[20px]'>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here'/>
        </div>
        <div className="addproduct-itemfield">
          <p className='mb-[20px]'>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here'/>
        </div>
      </div>

      {/* Dropdown for selecting the product category */}
      <div className="addproduct-itemfield">
        <p className='mb-[20px] mt-[20px]'>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector mb-[20px]'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>

       {/* Image upload field */}
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} alt="Upload area" className='addproduct-thumbnail-image' />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
      </div>

       {/* Button to trigger the product addition */}
      <button onClick={()=>{Add_Product()}} className="addproduct-btn">ADD</button>

    </div>
  )
}

export default AddProduct