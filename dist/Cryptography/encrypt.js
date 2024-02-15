"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptWithPubllcKey = void 0;
const crypto_1 = __importDefault(require("crypto"));
const encryptWithPubllcKey = (publicKey, message) => {
    const bufferMessage = Buffer.from(message, 'utf8');
    return crypto_1.default.publicEncrypt(publicKey, bufferMessage);
};
exports.encryptWithPubllcKey = encryptWithPubllcKey;
