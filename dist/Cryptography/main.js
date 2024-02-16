"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptedMessage = void 0;
const fs_1 = __importDefault(require("fs"));
const encrypt_1 = require("./encrypt");
const decrypt_1 = require("./decrypt");
const publicKey = fs_1.default.readFileSync(__dirname + "/publicKey.pem", "utf8");
exports.encryptedMessage = (0, encrypt_1.encryptWithPubllcKey)(publicKey, "Super secret message");
console.log(exports.encryptedMessage.toString());
const privateKey = fs_1.default.readFileSync(__dirname + "/privateKey.pem", 'utf8');
const decryptMessage = (0, decrypt_1.decryptWithPrivateKey)(privateKey, exports.encryptedMessage);
console.log(decryptMessage.toString());
