import { useState } from "react";

const LoginSignup = () => {

  // State to toggle between 'Login' and 'Sign Up' forms
  const [state,setState] = useState("Login");

   // State to manage form data for username, password, and email
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  // Handler to update formData state when input fields change
  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  // Function to handle login process
  const login = async () => {
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data);

    if(responseData.success) {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

   // Function to handle signup process
  const signup = async () => {
    console.log("Signup Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data);

    if(responseData.success) {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className="w-full h-[600px] bg-cover bg-center bg-orange-50 mx-auto flex justify-center items-center font-Poppins">
      <div className="w-6/12 sm:w-[400px] md:w-[580px] h-auto sm:h-[500px] md:h-[500px] bg-white py-4 px-11 sm:px-12 md:px-16 my-auto mx-auto ">
        <h1 className="mx-auto text-sm sm:text-lg md:text-xl font-bold pl-6">{state}</h1>

        {/* Input fields for username (if Sign Up), email, and password */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8 mx-auto pl-6">
        {state === "Sign Up"?<input 
            name="username"
            value={formData.username}
            onChange={changeHandler}
            className="h-8 sm:h-10 md:h-12 w-11/12 pl-3 sm:pl-4 md:pl-5 border border-gray-300 rounded-md outline-none text-xs sm:text-sm md:text-base" 
            type="text" 
            placeholder="Your Name"
          />:<></>}
          <input 
          name="email"
          value={formData.email}
          onChange={changeHandler}
            className="h-8 sm:h-10 md:h-12 w-11/12 pl-3 sm:pl-4 md:pl-5 border border-gray-300 rounded-md outline-none  text-xs sm:text-sm md:text-base " 
            type="email" 
            placeholder="Email Address"
          />
          <input 
          name="password"
          value={formData.password}
          onChange={changeHandler}
            className="h-8 sm:h-10 md:h-12 w-11/12 pl-3 sm:pl-4 md:pl-5 border border-gray-300 rounded-md outline-none text-xs sm:text-sm md:text-base " 
            type="password" 
            placeholder="Password"
          />
        </div>

        {/* Button to trigger login or signup function based on state */}
        <div className="pl-6">
          <button 
            onClick={()=>{state === "Login"?login():signup()}}
            className="w-11/12 h-8 sm:h-10 md:h-12 text-xs sm:text-sm md:text-base text-white bg-red-500 rounded-md font-bold cursor-pointer hover:bg-red-600 transition-colors duration-200">
            Continue
          </button>
        </div>

         {/* Toggle between login and sign up */}
        {state==="Sign Up"?
        <p className="mt-4 text-gray-500 font-medium text-xs sm:text-sm md:text-base w-9/12 ml-11">
          Already have an account? <span onClick={()=>{setState("Login")}} className="text-red-500 font-semibold cursor-pointer hover:underline">Login here</span>
        </p>:
        <p className="mt-4 text-gray-500 font-medium text-xs sm:text-sm md:text-base w-9/12 ml-11">
          Create an account? <span onClick={()=>{setState("Sign Up")}}  className="text-red-500 font-semibold cursor-pointer hover:underline">Click here</span>
        </p>}

        {/* Terms and conditions checkbox */}
        <div className="flex mt-2 gap-2 text-gray-500 text-xs sm:text-sm md:text-base font-medium w-10/12 ml-6">
          <input type="checkbox" id="terms" className=""/>
          <label htmlFor="terms" className="mt-1">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;