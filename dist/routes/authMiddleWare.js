"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.isAuth = void 0;
const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.status(401).json({ msg: "you are not authorised to use this resource" });
    }
};
exports.isAuth = isAuth;
const isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.admin) {
        next();
    }
    else {
        res.status(401).json({ msg: "you are not authorised to use this resource" });
    }
};
exports.isAdmin = isAdmin;
