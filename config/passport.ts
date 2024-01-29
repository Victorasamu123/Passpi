import passport from "passport";
import localStrategy from "passport-local";
import {User} from "./database"
import { validPassword } from "../lib/passwordUtils";
const LocalStrategy = localStrategy.Strategy;

const customFields = {
    usernameField : "uname",
    passwordField:"pw"
};

const verifyCallBack = (username:any, password:any, done:any) => {
    
    User.findOne({username:username}).then((user:any)=>{

        if(!user){return cb(null, false)}

        //function defined 
        const isValid = validPassword(password,user.hash, user.salt) {

        };

        if(isValid){
            return cb(null, user);
        } else {
            return cb(null , false);
        }

    }).catch((err)=>{
        cb(err);
    })

} 

// const Strategy = new LocalStrategy()

// passport.use(new LocalStrategy(
//     function(username, password, cb){
//      User.findOne({username:username}).then((user)=>{

//             if(!user){return cb(null, false)}

//             //function defined 
//             const isValid = validPassword(password,user.hash, user.salt);
//         })
//     }
// ))

function cb(arg0: null, arg1: boolean): any {
    throw new Error("Function not implemented.");
}
