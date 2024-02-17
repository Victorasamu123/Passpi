import crypto from "crypto";
import fs from "fs";
import { decryptWithPublicKey } from "./decrypt";
import { packageOfDataToSend } from "./signMessage";

const receivedData = packageOfDataToSend;

const hash = crypto.createHash(receivedData.algorithm);

const publicKey = fs.readFileSync(__dirname + "/publicKey.pem", 'utf8');

const decryptMessage = decryptWithPublicKey(publicKey,receivedData.signedMessageEncryptData);

const decryptMessageHex = decryptMessage.toString();

const hashOfOriginal = hash.update(JSON.stringify(receivedData.originalData));

const hashOfOriginalHex = hash.digest('hex');

if (hashOfOriginalHex === decryptMessageHex) {
    console.log("Success! the data has not been tempered with and the sender is valid")
} else {
    console.log("Uh Oh... Someone is tring to manipulate the data or ....");
}