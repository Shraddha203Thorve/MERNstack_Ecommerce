const app=require("./app")
const dotenv=require("dotenv")
const connectDatabase=require("./config/database")
const cloudinary = require("cloudinary");
//handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`)
    console.log("Shutting down server due to uncaughtException promise rejection")
    server.close(()=>{
        process.exit(1)
    })
})
console.log("up")
//config
dotenv.config({path:`backend/config/config.env`});

//connecting to db
connectDatabase()

console.log("up")
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
  console.log(process.env.CLOUDINARY_NAME)
  

const server=app.listen(process.env.PORT,()=>{
    console.log(`server running on port:${process.env.port}`)
})

//unhandle promise rejection
process.on("Unhandle rejection",err=>{
    console.log(`Error:${err.message}`)
    console.log("Shutting down server due to unhandle promise rejection")
    server.close(()=>{
        process.exit(1)
    })
})