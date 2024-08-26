import './AddProduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'
import { useState } from 'react'

const AddProduct = () => {

  const [image, setImage] = useState(false); //used to show image of the uploaded product

//Add products to database
  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:"",
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  //Add to all input fields type text and select tag 
  const changeHandler = (e) => {
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
  }

  //Use in button tag - Used to add product in the backend
  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;  
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept: 'application/json',
      },
      body:formData,
    }).then((resp)=> resp.json()).then((data)=>{responseData=data});
    if(responseData.success)
    {
      product.image = responseData.image_url;
      console.log(product);
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

      <div className='addproduct-itemfield'>
        <p className='mb-[20px]'>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here'/>
      </div>

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

      <div className="addproduct-itemfield">
        <p className='mb-[20px] mt-[20px]'>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector mb-[20px]'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} alt="Upload area" className='addproduct-thumbnail-image' />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
      </div>

      <button onClick={()=>{Add_Product()}} className="addproduct-btn">ADD</button>

    </div>
  )
}

export default AddProduct