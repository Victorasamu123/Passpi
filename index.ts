import express, {Express, Request, Response} from "express"
import mongoose, { connection } from "mongoose";
import session from "express-session";
import cors from "cors";
import MongoStore from "connect-mongo";



const app = express();

app.use(cors())


require("dotenv").config();

const PORT = process.env.PORT || 4500
const MONGODB = process.env.MONGODB

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const store = new MongoStore({
    mongoUrl: MONGODB,
    collectionName:"sessions"
});

app.use(session({
    secret:"same secret",
    resave:false,
    saveUninitialized:true,
    store: store,
    cookie:{
        maxAge: 1000 * 60 * 60 *24
    }
}));

app.get("/", (req :Request,res:Response)=>{
res.send( "");
});

app.get("/justy", (req:Request, res:Response)=>{
    res.send("I am the next big thing ");
});

app.listen(PORT , ()=>{
    console.log(`port listening at port ${PORT}`);
});