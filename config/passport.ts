import passport from "passport";
import localStrategy from "passport-local";
import {User} from "./database"
import { validPassword,genPassword } from "../lib/passwordUtils";
const LocalStrategy = localStrategy.Strategy;

const customFields = {
    usernameField : "uname",
    passwordField:"pw"
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

passport.serializeUser((user,done)=>{
    done(null, user);
});

passport.deserializeUser((userId,done)=>{
    User.findById(userId).then((user)=>{
    done(null, user); 
    }).catch(err=> done(err))
});