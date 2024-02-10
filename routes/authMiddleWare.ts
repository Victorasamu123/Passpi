import express,{Request,Response,NextFunction} from "express";

export const isAuth = (req:Request,res:Response, next:NextFunction)=>{
    if(req.isAuthenticated()){
        next();
    }else{
        res.status(401).json({msg:"you are not authorised to use this resource"});
    }
}

export const isAdmin = (req:Request,res:Response,next:NextFunction)=>{
    if(req.isAuthenticated() && req.user.admin){
        next();
    }else{
        res.status(401).json({msg:"you are not authorised to use this resource"});
    }
}