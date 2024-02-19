"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicKey = exports.privateKey = void 0;
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
_a = crypto_1.default.generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
}), exports.privateKey = _a.privateKey, exports.publicKey = _a.publicKey;
fs_1.default.writeFileSync(__dirname + '/privateKey.pem', exports.privateKey);
fs_1.default.writeFileSync(__dirname + '/publicKey.pem', exports.publicKey);
console.log('Keys generated and saved successfully.');
