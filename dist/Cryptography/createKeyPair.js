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
// export const genKeyPair=():void=>{
//     const keyPair= crypto.generateKeyPairSync('x448',{
//         modulusLength:4906,
//         PublicKeyEncoding:{
//             type:"pkcs1",
//             format:"pem"
//         },
//         privateKeyEncoding:{
//             type:"pkcs1",
//             format:"pem"
//         }
//     });
//      console.log(keyPair.privateKey);
//     const publicKeyPem = keyPair.publicKey.export({ type: 'pkcs1', format: 'pem' });
//     fs.writeFileSync(__dirname + '/id_rsa_pub.pem',publicKeyPem);
//     const privateKeyPem = keyPair.privateKey.export({ type: 'pkcs1', format: 'pem' });
//     fs.writeFileSync(__dirname + '/id_rsa_priv.pem',privateKeyPem);
// }
