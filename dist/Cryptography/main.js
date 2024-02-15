"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const encrypt_1 = require("./encrypt");
const publicKey = fs_1.default.readFileSync(__dirname + "/publicKey.pem", "utf8");
const encryptedMessage = (0, encrypt_1.encryptWithPubllcKey)(publicKey, "Super secret message");
console.log(encryptedMessage.toString());
