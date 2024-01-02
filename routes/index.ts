import express,{Request,Response,NextFunction} from "express";
import passport from "passport";
import { validPassword } from "../lib/passwordUtils";
import { genPassword } from "../lib/passwordUtils";
import { User } from "../config/database";

export const router = express.Router();

router.post("/signin",(req:Request,res:Response,next:NextFunction)=>{});

router.post("/signup",(req:Request,res:Response,next:NextFunction)=>{});

router.post("/",(req:Request,res:Response,next:NextFunction)=>{
    // res.send
});



