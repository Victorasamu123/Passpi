"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const decrypt_1 = require("./decrypt");
const signMessage_1 = require("./signMessage");
const receivedData = signMessage_1.packageOfDataToSend;
const hash = crypto_1.default.createHash(receivedData.algorithm);
const publicKey = fs_1.default.readFileSync(__dirname + "/publicKey.pem", 'utf8');
const decryptMessage = (0, decrypt_1.decryptWithPublicKey)(publicKey, receivedData.signedMessageEncryptData);
const decryptMessageHex = decryptMessage.toString();
const hashOfOriginal = hash.update(JSON.stringify(receivedData.originalData));
const hashOfOriginalHex = hash.digest('hex');
if (hashOfOriginalHex === decryptMessageHex) {
    console.log("Success! the data has not been tempered with and the sender is valid");
}
else {
    console.log("Uh Oh... Someone is tring to manipulate the data or someone else is a spying bastard");
}
