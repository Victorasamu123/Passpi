import crypto from "crypto";
import fs from "fs"
import express , {Response} from "express";

// const generateKeyPair():{publicKey:string ,privateKey: string}{
//   const {privateKey, publicKey} = 
// }

const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa',{
   modulusLength:4096,
   publicKeyEncoding:{
    type:'spki',
    format:'pem'
   },
   privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});

fs.writeFileSync('privateKey.pem',privateKey);
fs.writeFileSync('publicKey.pem',publicKey);



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