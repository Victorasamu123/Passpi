"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
const connect = process.env.MONGODB;
const connection = mongoose_1.default.connect(connect);
const UserSchema = new mongoose_1.default.Schema({
    username: String,
    hash: String,
    salt: String
});
exports.User = mongoose_1.default.model("user", UserSchema);
module.exports = exports.User;
