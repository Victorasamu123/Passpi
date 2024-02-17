"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageOfDataToSend = void 0;
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const encrypt_1 = require("./encrypt");
const hash = crypto_1.default.createHash('sha256');
const myData = {
    firstName: "asamu",
    lastname: "victor",
    socialSecurityNumber: " No No No. Never put personal info in a digitally signed message since this form of cryptograpy does not hide the data"
};
const myDataString = JSON.stringify(myData);
hash.update(myDataString);
const hashedData = hash.digest('hex');
const senderPrivateKey = fs_1.default.readFileSync(__dirname + "/privateKey.pem", 'utf8');
const signedMessage = (0, encrypt_1.encryptWithPrivateKey)(senderPrivateKey, hashedData);
exports.packageOfDataToSend = {
    algorithm: 'sha256',
    originalData: myData,
    signedMessageEncryptData: signedMessage
};
