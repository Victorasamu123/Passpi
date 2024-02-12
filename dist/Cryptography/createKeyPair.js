"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const genKeyPair = () => {
    const keyPair = crypto_1.default.generateKeyPairSync('x448', {
        modulusLength: 4906,
        PublicKeyEncoding: {
            type: "pkcs1",
            format: "pem"
        },
        privateKeyEncoding: {
            type: "pkcs1",
            format: "pem"
        }
    });
    const publicKeyPem = keyPair.publicKey.export({ type: 'pkcs1', format: 'pem' });
    fs_1.default.writeFileSync(__dirname + '/id_rsa_pub.pem', publicKeyPem);
    const privateKeyPem = keyPair.privateKey.export({ type: 'pkcs1', format: 'pem' });
    fs_1.default.writeFileSync(__dirname + '/id_rsa_priv.pem', privateKeyPem);
};
