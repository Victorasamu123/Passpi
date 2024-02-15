import crypto from "crypto";
import { publicKey } from "./createKeyPair";

export const encryptWithPubllcKey=(publicKey:string, message: any)=>{
    const bufferMessage = Buffer.from(message, 'utf8');

    return crypto.publicEncrypt(publicKey, bufferMessage);
     
}