import express,{Request,Response,NextFunction} from "express";
import { UserAuth } from "../models/user.model";
import passport from "passport";
import { router } from ".";
// import utils from "../lib/utils"

export const userRoute = express.Router();

userRoute.get('/protected',(req,res,next)=>{

});

userRoute.post('/signin',(req,res,next)=>{

});

userRoute.post('/signup',(req,res,next)=>{

});
