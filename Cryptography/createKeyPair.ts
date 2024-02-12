import crypto from "crypto";
import fs from "fs"

const genKeyPair=():void=>{
    const keyPair= crypto.generateKeyPairSync('x448',{
        modulusLength:4906,
        PublicKeyEncoding:{
            type:"pkcs1",
            format:"pem"
        },
        privateKeyEncoding:{
            type:"pkcs1",
            format:"pem"
        }
    });

    const publicKeyPem = keyPair.publicKey.export({ type: 'pkcs1', format: 'pem' });
    fs.writeFileSync(__dirname + '/id_rsa_pub.pem',publicKeyPem);

    const privateKeyPem = keyPair.privateKey.export({ type: 'pkcs1', format: 'pem' });
    fs.writeFileSync(__dirname + '/id_rsa_priv.pem',privateKeyPem);
}