"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
// const generateKeyPair():{publicKey:string ,privateKey: string}{
//   const {privateKey, publicKey} = 
// }
const { privateKey, publicKey } = crypto_1.default.generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});
fs_1.default.writeFileSync('privateKey.pem', privateKey);
fs_1.default.writeFileSync('publicKey.pem', publicKey);
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
