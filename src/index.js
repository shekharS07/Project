import dotenv from "dotenv";
import connectDB from "./db/db.js"

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
    application.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port: ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed",error);
})