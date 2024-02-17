import crypto from "crypto";
import fs from "fs";
import { encryptWithPrivateKey, encryptWithPubllcKey } from "./encrypt";
import { decryptWithPrivateKey,decryptWithPublicKey } from "./decrypt";

const hash = crypto.createHash('sha256');

const myData= {
    firstName:"asamu",
    lastname:"victor",
    socialSecurityNumber:" No No No. Never put personal info in a digitally signed message since this form of cryptograpy does not hide the data"
};
 
const myDataString = JSON.stringify(myData);

hash.update(myDataString);

const hashedData = hash.digest('hex');

const senderPrivateKey = fs.readFileSync(__dirname + "/privateKey.pem", 'utf8');

const signedMessage = encryptWithPrivateKey(senderPrivateKey,hashedData);

export const packageOfDataToSend = {
    algorithm:'sha256',
    originalData:myData,
    signedMessageEncryptData:signedMessage
}
