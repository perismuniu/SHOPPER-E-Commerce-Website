//Initialize dependencies and modules
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");
const { type } = require("os");

app.use(express.json());
app.use(cors()); // Enable CORS for cross-origin resource sharing

//Database connection with mongoDB
mongoose.connect("mongodb+srv://perismuniu:700700@cluster0.idl1l.mongodb.net/e-commerce")

//API Creation
app.get("/",(req, res)=>{
    res.send("Express App is Running")
})

//Image Storage Engine using Multer for handling image uploads
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`) // return null, image name
    }
})

const upload = multer({storage:storage})

// Serve images from the upload directory
app.use('/images',express.static('upload/images'))

// Endpoint for uploading images
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for creating products
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,        
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

// API Endpoint for adding a new product
app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;

    // Generate automated ID for the new product
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else
    {
        id = 1;
    }

    // Create a new product instance
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });

    console.log(product);
    await product.save(); // Save the new product to the database
    console.log("saved");
    res.json({//generate this in frontend
        success:true,
        name:req.body.name,
    })
})

// API Endpoint for deleting a product by ID
app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:2,
        name:req.body.name,
    })
})

// API Endpoint for getting all products
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
        res.send(products);
})

//Schema for creating a user model
const Users = mongoose.model('Users', {
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    CartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// API Endpoint for user signup (registration)
app.post('/signup', async (req,res) => {
    
    // Check if the user already exists
    let check = await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success:false,errors:"Existing user found with the same email address"})
    }

     // Initialize an empty cart for the new user
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;     
    }

    // Create a new user instance
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save(); // Save the new user to the database

    const data = {
        user:{
            id:user.id
        }
    }

    // Generate a JWT token for the user
    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true,token})
})

// API Endpoint for user login
app.post('/login',async (req,res) =>{
    // Find the user by email
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        // Compare the provided password with the stored password
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            // Generate a JWT token for the user
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else {
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else {
        res.json({success:false,errors:"Wrong Email Id"});
    }
})

// API Endpoint for fetching recently added products (new collections)
app.get('/newcollections',async (req,res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8); // Get the last 8 products (recently added)
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

//creating endpoint for popular in women section
app.get('/popularinwomen',async (req,res) => {
    let products = await Product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    console.log("Popular in women fetched");
    res.send(popular_in_women);
})

//creating middleware to fetch user
const fetchUser = async (req,res,next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"Please authenticate using a valid token"});
        }
    }
}

//creating enpoint for adding products in cartdata
app.post('/addtocart',fetchUser,async (req,res) => {
    console.log("Added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});

    // Initialize cartData if undefined or initialize itemId if it doesn't exist
    userData.CartData = userData.CartData || {};
    userData.CartData[req.body.itemId] = (userData.CartData[req.body.itemId] || 0) + 1;
    await Users.findOneAndUpdate({_id:req.user.id},{CartData:userData.CartData});
    console.log(userData.CartData);
    res.send("Added");
})

//Creating endpoint to remove product from cartdata
app.post('/removefromcart', fetchUser, async (req, res) => {
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });

    // Check if cartData exists and if the item exists in cartData
    userData.CartData = userData.CartData || {};

    if (userData.CartData[req.body.itemId]) {
        // Decrement the item count
        userData.CartData[req.body.itemId] -= 1;

        // If the item count drops to zero or below, remove the item from cartData
        if (userData.CartData[req.body.itemId] <= 0) {
            delete userData.CartData[req.body.itemId];
        }

        await Users.findOneAndUpdate({ _id: req.user.id }, { CartData: userData.CartData });
        res.send("Removed");
    } else {
        // If the item doesn't exist in the cart
        res.status(404).send("Item not found in cart");
    }
});

//Creating endpoint to get cartdata
app.post('/getcart',fetchUser,async (req,res) => {
    console.log("Get cart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.CartData);
})


// Start the server on the defined port
app.listen(port, (error)=>{
    if (!error) {
        console.log("Server Running on Port"+port)
    }
    else {
        console.log("Error :"+error)
    }
})