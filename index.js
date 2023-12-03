const express=require('express');
const app=express()
const mongoose=require('mongoose')
const mongoDB='mongodb://127.0.0.1:27017/myapp'
mongoose.connect('mongodb://127.0.0.1:27017/myapp');

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log('Connected to MongoDB');
    // Your application logic here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
app.listen(5000,()=>{
    console.log('server is Running')
})