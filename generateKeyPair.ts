import crypto from "crypto";
import fs from "fs"

export const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa',{
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

 
fs.writeFileSync(__dirname + '/privateKey.pem',privateKey);
fs.writeFileSync(__dirname + '/publicKey.pem',publicKey);

console.log('Keys generated and saved successfully.');