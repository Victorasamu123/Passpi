import passport from "passport";
import fs from "fs";
import path from "path";
import { UserAuth } from "../models/user.model";

const pathToKey = path.join(__dirname, '..','publicKey.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {};

// export (passport)=>{}