"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const PUB_KEY = fs_1.default.readFileSync(__dirname + "/publicKey.pem", "utf8");
const PRIV_KEY = fs_1.default.readFileSync(__dirname + "/privateKey.pem", "utf8");
const payloadObj = {
    sub: "1234567890",
    name: 'John Doe',
    admin: true,
    iat: 1516239022
};
const signedJWT = jsonwebtoken_1.default.sign(payloadObj, PRIV_KEY, { algorithm: "RS256" });
jsonwebtoken_1.default.verify(signedJWT, PUB_KEY, { algorithms: ['RS256'] }, (err, payload) => {
    console.log(payload);
});
