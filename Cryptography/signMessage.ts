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
3-22