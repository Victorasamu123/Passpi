"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pathToKey = path_1.default.join(__dirname, '..', 'publicKey.pem');
const PUB_KEY = fs_1.default.readFileSync(pathToKey, 'utf8');
const options = {};
// export (passport)=>{}
