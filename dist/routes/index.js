"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const passwordUtils_1 = require("../lib/passwordUtils");
const database_1 = require("../config/database");
const authMiddleWare_1 = require("./authMiddleWare");
exports.router = express_1.default.Router();
// post routess //
exports.router.post("/signin", passport_1.default.authenticate("local", { failureRedirect: "/login-failure", successRedirect: "/login-success" }));
exports.router.post("/signup", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const saltHash = yield (0, passwordUtils_1.genPassword)(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    const newUser = new database_1.User({
        username: req.body.username,
        hash: hash,
        salt: salt,
        admin: true,
    });
    newUser.save().then((user) => {
        console.log(user);
    });
    res.redirect("/signin");
}));
//  get route //
exports.router.get("/", (req, res, next) => {
    res.send(`<h1>Home</h1><p>Please <a href="/signup">register</a></p>`);
});
exports.router.get("/signin", (req, res, next) => {
    const form = `<<h1>Login Page</h1><form method="POST" action="/signin">\ Enter Username:<br><input type="text" name="username">\ <br>Enter Password:<br><input type="password" name="password">\ <br><br><input type="submit" value="Submit"></form>`;
    res.send(form);
});
exports.router.get("/signup", (req, res, next) => {
    const form = `<<h1>Register Page</h1><form method="POST" action="/signup">\ Enter Username:<br><input type="text" name="username">\ <br>Enter Password:<br><input type="password" name="password">\ <br><br><input type="submit" value="Submit"></form>`;
    res.send(form);
});
/**
 * Lookup how to authenticate users on routes with Local Strategy
 * Google Search: "How to use Express Passport Local Strategy"
 *
 * Also, look up what behaviour express session has without a maxage set
 */
exports.router.get('/protected-route', authMiddleWare_1.isAuth, (req, res, next) => {
    res.send("you made it to the route");
});
exports.router.get('/admin-route', authMiddleWare_1.isAdmin, (req, res, next) => {
    res.send("you made it to the admin route");
});
// Visiting this route logs the user out
exports.router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            console.error('Error logging out:', err);
            res.status(500).send('Error logging out');
        }
        else {
            req.session.destroy((err) => {
                if (err) {
                    // console.error('Error destroying session:', err);
                    // res.status(500).send('Error destroying session');
                }
                else {
                    res.redirect('/'); // Redirect to the homepage or login page
                }
            });
        }
    });
    res.redirect('/protected-route');
});
exports.router.get('/login-success', (req, res, next) => {
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
});
exports.router.get('/login-failure', (req, res, next) => {
    res.send('You entered the wrong password.');
});
