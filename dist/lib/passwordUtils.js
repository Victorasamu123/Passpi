"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPassword = exports.genPassword = void 0;
const crypto_1 = __importDefault(require("crypto"));
function genPassword(password) {
    let salt = crypto_1.default.randomBytes(32).toString("hex");
    let genHash = crypto_1.default.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
    return {
        salt: salt,
        hash: genHash
    };
}
exports.genPassword = genPassword;
function validPassword(password, hash, salt) {
    let hashVerify = crypto_1.default.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
}
exports.validPassword = validPassword;
// module.exports.validPassword = validPassword;
// module.exports.genPassword = genPassword;
