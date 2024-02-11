import express,{Request,Response,NextFunction} from "express";
import { User } from "../config/database";

export const isAuth = (req:Request,res:Response, next:NextFunction)=>{
    if(req.isAuthenticated()){
        next();
    }else{
        res.status(401).json({msg:"you are not authorised to use this resource"});
    }
}

export const isAdmin = (req:Request,res:Response,next:NextFunction)=>{
    if(req.isAuthenticated() && (req.user as typeof User & {admin:boolean}).admin){
        next();
    }else{
        res.status(401).json({msg:"you are not authorised to use this resource because you are not an admin"});
    }
}