import express, {Express, Request, Response} from "express"
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4500

app.get("/", (req :Request,res:Response)=>{
res.send( "");
});

app.get("/justy", (req:Request, res:Response)=>{
    res.send("I am the next big thing ");
});

app.listen(PORT , ()=>{
    console.log(`port listening at port ${PORT}`)
});