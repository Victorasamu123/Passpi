import passport from "passport";
import localStrategy from "passport-local";
import {User} from "./database"
import { validPassword,genPassword } from "../lib/passwordUtils";
const LocalStrategy = localStrategy.Strategy;
import fs from "fs";
import path from "path";
import { UserAuth } from "../models/user.model";


const customFields = {
    usernameField : "username",
    passwordField:"password"
};

const verifyCallBack = (username: string, password:string, done:any) => {
    User.findOne({username:username}).then((user)=>{
         
        if(!user){return done (null, false)}

        //function defined 
        const isValid = validPassword(password, user.hash as string, user.salt as string)

        if(isValid){
            return done(null, user);
        } else {
            return done(null , false);
        }

    }).catch((err)=>{
        done(err);
    });

} 

const Strategy = new LocalStrategy(customFields, verifyCallBack);

passport.use(Strategy);


const pathToKey = path.join(__dirname, '..','publicKey.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {};









passport.serializeUser((user,done)=>{
    done(null, user);
});

passport.deserializeUser((userId,done)=>{
    User.findById(userId).then((user)=>{
    done(null, user); 
    }).catch(err=> done(err))
});