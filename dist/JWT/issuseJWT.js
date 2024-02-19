"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base64url_1 = __importDefault(require("base64url"));
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const signatureFunction = crypto_1.default.createSign('RSA-SHA256');
const verifyFunction = crypto_1.default.createVerify('RSA-SHA256');
const headerObj = {
    alg: "RS256",
    typ: "JWT"
};
const payloadObj = {
    sub: "1234567890",
    name: 'John Doe',
    admin: true,
    iat: 1516239022
};
const headerObjString = JSON.stringify(headerObj);
const payloadObjString = JSON.stringify(payloadObj);
const base64urlHeader = (0, base64url_1.default)(headerObjString);
const base64urlPayload = (0, base64url_1.default)(payloadObjString);
signatureFunction.write(base64urlHeader + '.' + base64urlPayload);
signatureFunction.end();
const PRIV_KEY = fs_1.default.readFileSync(__dirname + "/privateKey.pem", "utf8");
const signatureBase64 = signatureFunction.sign(PRIV_KEY, "base64");
const signatureBase64Url = base64url_1.default.fromBase64(signatureBase64);
console.log(signatureBase64Url);
const JWT = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ";
const jwtparts = JWT.split('.');
const headerInBase64UrlFormat = jwtparts[0];
const payLoadInBase64UrlFormat = jwtparts[1];
const signatureInBase64UrlFormat = jwtparts[2];
verifyFunction.write(headerInBase64UrlFormat + '.' + payLoadInBase64UrlFormat);
verifyFunction.end();
const jwtSignatureBase64 = base64url_1.default.toBase64(signatureInBase64UrlFormat);
const PUB_KEY = fs_1.default.readFileSync(__dirname + "/publicKey.pem", "utf8");
const signatureIsValid = verifyFunction.verify(PUB_KEY, jwtSignatureBase64, "base64");
console.log(signatureIsValid);
