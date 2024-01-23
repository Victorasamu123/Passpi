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
const verifyCallBack = (username, password, done) => {
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
