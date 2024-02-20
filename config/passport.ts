import passport from "passport";
import localStrategy from "passport-local";
import {User} from "./database"
import { validPassword,genPassword } from "../lib/passwordUtils";
const LocalStrategy = localStrategy.Strategy;
import fs from "fs";
import path from "path";
import { UserAuth } from "../models/user.model";
import passportjwt from "passport-jwt";
import {Algorithm} from "jsonwebtoken"



const JWTStrategy = passportjwt.Strategy;
const ExtractJwt = passportjwt.ExtractJwt;


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

// const passportJWTOptions = {
//     jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: PUB_KEY || secret phrase,
//     issuer:'enter issuser here',
//     audience:"enter audience here",
//     algorithms:['RS256'],
//     ignoreExpiration: false,
//     passReqToCallback:false,
//     jsonWebTokenOptions:{
//         complete:false,
//         clockTolerate:'',
//         maxAge:"2d",
//         clockTimeStamp:"100",
//         nonce:'string here for openID'
//     }
// }

const pathToKey = path.join(__dirname, '..','publicKey.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : string,
    algorithms : Algorithm[],
};


const StrategyJwt = new JWTStrategy(options,(payload, done)=>{
  
});

export const verifyCallBackJWT = ()=>{
   passport.use(StrategyJwt);
};








passport.serializeUser((user,done)=>{
    done(null, user);
});

passport.deserializeUser((userId,done)=>{
    User.findById(userId).then((user)=>{
    done(null, user); 
    }).catch(err=> done(err))
});