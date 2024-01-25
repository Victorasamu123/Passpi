"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const database_1 = require("./database");
const passwordUtils_1 = require("../lib/passwordUtils");
const LocalStrategy = passport_local_1.default.Strategy;
const customFields = {
    usernameField: "uname",
    passwordField: "pw"
};
const verifyCallBack = (username, password, done) => {
    database_1.User.findOne({ username: username }).then((user) => {
        if (!user) {
            return cb(null, false);
        }
        //function defined 
        const isValid = (0, passwordUtils_1.validPassword)(password, user.hash, user.salt);
        if (isValid) {
            return cb(null, user);
        }
        else {
            return cb(null, false);
        }
    }).catch((err) => {
        cb(err);
    });
};
// const Strategy = new LocalStrategy()
passport_1.default.use(new LocalStrategy(function (username, password, cb) {
    database_1.User.findOne({ username: username }).then((user) => {
        if (!user) {
            return cb(null, false);
        }
        //function defined 
        const isValid = (0, passwordUtils_1.validPassword)(password, user.hash, user.salt);
    });
}));
function cb(arg0, arg1) {
    throw new Error("Function not implemented.");
}
