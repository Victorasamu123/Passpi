import passport from "passport";
import localStrategy from "passport-local";
import {User} from "./database"
import { validPassword } from "../lib/passwordUtils";


const LocalStrategy = localStrategy.Strategy;

passport.use(new LocalStrategy(
    function(username, password, cb){
        User.findOne({username:username}).then((user)=>{

            if(!user){return cb(null, false)}


            //function defined 
            const isValid = validPassword(password,user.hash, user.salt);
        })
    }
))