"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptWithPublicKey = exports.decryptWithPrivateKey = void 0;
const crypto_1 = __importDefault(require("crypto"));
const decryptWithPrivateKey = (privateKey, encryptedMessage) => {
    return crypto_1.default.privateDecrypt(privateKey, encryptedMessage);
};
exports.decryptWithPrivateKey = decryptWithPrivateKey;
const decryptWithPublicKey = (publicKey, encryptedMessage) => {
    return crypto_1.default.publicDecrypt(publicKey, encryptedMessage);
};
exports.decryptWithPublicKey = decryptWithPublicKey;
