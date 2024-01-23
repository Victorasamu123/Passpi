"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
// post routess //
exports.router.post("/signin", (req, res, next) => { });
exports.router.post("/signup", (req, res, next) => { });
//  get route //
exports.router.get("/", (req, res, next) => {
    res.send(`<h1>Home</h1><p>Please <a href="/signup">register</a></p>`);
});
exports.router.get("/login", (req, res, next) => {
    const form = `<<h1>Login Page</h1><form method="POST" action="/signin">\ Enter Username:<br><input type="text" name="username">\ <br>Enter Password:<br><input type="password" name="password">\ <br><br><input type="submit" value="Submit"></form>`;
    res.send(form);
});
exports.router.get("/register", (req, res, next) => {
    const form = `<<h1>Register Page</h1><form method="POST" action="/signup">\ Enter Username:<br><input type="text" name="username">\ <br>Enter Password:<br><input type="password" name="password">\ <br><br><input type="submit" value="Submit"></form>`;
    res.send(form);
});
exports.router.get("/register", (req, res, next) => {
    const form = `<<h1>Register Page</h1><form method="POST" action="/signup">\ Enter Username:<br><input type="text" name="username">\ <br>Enter Password:<br><input type="password" name="password">\ <br><br><input type="submit" value="Submit"></form>`;
    res.send(form);
});
/**
 * Lookup how to authenticate users on routes with Local Strategy
 * Google Search: "How to use Express Passport Local Strategy"
 *
 * Also, look up what behaviour express session has without a maxage set
 */
exports.router.get('/protected-route', (req, res, next) => {
    // This is how you check if a user is authenticated and protect a route.  You could turn this into a custom middleware to make it less redundant
    if (req.isAuthenticated()) {
        res.send('<h1>You are authenticated</h1><p><a href="/logout">Logout and reload</a></p>');
    }
    else {
        res.send('<h1>You are not authenticated</h1><p><a href="/login">Login</a></p>');
    }
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
                    console.error('Error destroying session:', err);
                    res.status(500).send('Error destroying session');
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
