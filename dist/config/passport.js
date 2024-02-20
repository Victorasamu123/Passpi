"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCallBackJWT = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const database_1 = require("./database");
const passwordUtils_1 = require("../lib/passwordUtils");
const LocalStrategy = passport_local_1.default.Strategy;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const customFields = {
    usernameField: "username",
    passwordField: "password"
};
const verifyCallBack = (username, password, done) => {
    database_1.User.findOne({ username: username }).then((user) => {
        if (!user) {
            return done(null, false);
        }
        //function defined 
        const isValid = (0, passwordUtils_1.validPassword)(password, user.hash, user.salt);
        if (isValid) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    }).catch((err) => {
        done(err);
    });
};
const Strategy = new LocalStrategy(customFields, verifyCallBack);
passport_1.default.use(Strategy);
// const passportJWTOptions = {
//     jwtFromRequest:Extr
// }
4 - 45;
const pathToKey = path_1.default.join(__dirname, '..', 'publicKey.pem');
const PUB_KEY = fs_1.default.readFileSync(pathToKey, 'utf8');
const options = {};
const verifyCallBackJWT = (passport) => {
};
exports.verifyCallBackJWT = verifyCallBackJWT;
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((userId, done) => {
    database_1.User.findById(userId).then((user) => {
        done(null, user);
    }).catch(err => done(err));
});
