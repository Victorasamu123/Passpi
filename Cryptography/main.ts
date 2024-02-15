import fs from "fs";
import { encryptWithPubllcKey } from "./encrypt";   

const publicKey = fs.readFileSync(__dirname + "/publicKey.pem", "utf8");

const encryptedMessage = encryptWithPubllcKey(publicKey, "Super secret message");

console.log(encryptedMessage.toString());