import fs from "fs";
import { encryptWithPubllcKey } from "./encrypt";   
import { decryptWithPrivateKey } from "./decrypt";

const publicKey = fs.readFileSync(__dirname + "/publicKey.pem", "utf8");

export const encryptedMessage = encryptWithPubllcKey(publicKey, "Super secret message");

console.log(encryptedMessage.toString());


const privateKey= fs.readFileSync(__dirname + "/privateKey.pem", 'utf8');

const decryptMessage = decryptWithPrivateKey(privateKey,encryptedMessage);

console.log(decryptMessage.toString());