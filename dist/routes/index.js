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
