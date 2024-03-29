"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const index_1 = require("./routes/index");
const users_route_1 = require("./routes/users.route");
;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
require("dotenv").config();
const PORT = process.env.PORT || 4500;
const MONGODB = process.env.MONGODB;
const SESSIONSECRET = process.env.SESSIONSECRET;
require("./config/passport");
require('./config/passportJWT');
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const store = new connect_mongo_1.default({
    mongoUrl: MONGODB,
    collectionName: "sessions"
});
app.use((0, express_session_1.default)({
    secret: SESSIONSECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
}));
app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    next();
});
app.use(index_1.router);
app.use(users_route_1.userRoute);
app.get("/", (req, res) => {
    if (!req.session.views) {
        req.session.views = req.session.views + 1;
    }
    else {
        req.session.views += 1;
    }
    ;
    res.send(`You visited ${req.session.views} times`);
});
app.get("/justy", (req, res) => {
    res.send("I am the next big thing ");
});
app.listen(PORT, () => {
    console.log(`port listening at port ${PORT}`);
});
