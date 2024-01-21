import express,{Request,Response,NextFunction} from "express";
import passport from "passport";
import { validPassword } from "../lib/passwordUtils";
import { genPassword } from "../lib/passwordUtils";
import { User } from "../config/database";

export const router = express.Router();

// post routess //

router.post("/signin",(req:Request,res:Response,next:NextFunction)=>{});

router.post("/signup",(req:Request,res:Response,next:NextFunction)=>{});

//  get route //

router.get("/" , (req:Request, res:Response, next:NextFunction)=>{
    res.send(`<h1>Home</h1><p>Please <a href="/signup">register</a></p>`)
});

router.get("/login" , (req:Request, res:Response, next:NextFunction)=>{
    const form = `<<h1>Login Page</h1><form method="POST" action="/signin">\ Enter Username:<br><input type="text" name="username">\ <br>Enter Password:<br><input type="password" name="password">\ <br><br><input type="submit" value="Submit"></form>`

    res.send(form);
});

router.get("/register" , (req:Request, res:Response, next:NextFunction)=>{
    const form = `<<h1>Register Page</h1><form method="POST" action="/signup">\ Enter Username:<br><input type="text" name="username">\ <br>Enter Password:<br><input type="password" name="password">\ <br><br><input type="submit" value="Submit"></form>`

    res.send(form);
});
router.get("/register" , (req:Request, res:Response, next:NextFunction)=>{
    const form = `<<h1>Register Page</h1><form method="POST" action="/signup">\ Enter Username:<br><input type="text" name="username">\ <br>Enter Password:<br><input type="password" name="password">\ <br><br><input type="submit" value="Submit"></form>`
      
    res.send(form);
});





 