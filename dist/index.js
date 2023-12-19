"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
require("dotenv").config();
const PORT = process.env.PORT || 4500;
const MONGODB = process.env.MONGODB;
// const dbstring: any = MONGODB;
// const dbOptions: any = {
//     useNewUrlParser: true,
//     useUnifiedTopology:true
// }
// const conection = mongoose.connect(MONGODB as string);
const store = new connect_mongo_1.default({
    mongoUrl: MONGODB,
    collectionName: "sessions"
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// const sessionStore= new MongoStore({
//     mongooseConnection : conection,
//     collection:"session"
// });
app.use((0, express_session_1.default)({
    secret: "same secret",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.get("/", (req, res) => {
    res.send("");
});
app.get("/justy", (req, res) => {
    res.send("I am the next big thing ");
});
app.listen(PORT, () => {
    console.log(`port listening at port ${PORT}`);
});
