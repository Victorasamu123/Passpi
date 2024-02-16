"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const hash = crypto_1.default.createHash('sha256');
const myData = {
    firstName: "asamu",
    lastname: "victor",
    socialSecurityNumber: " No No No. Never put personal info in a digitally signed message since this form of cryptograpy does not hide the data"
};
const myDataString = JSON.stringify(myData);
hash.update(myDataString);
const hashedData = hash.digest('hex');
3 - 22;
