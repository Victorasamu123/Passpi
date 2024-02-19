"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
// import utils from "../lib/utils"
exports.userRoute = express_1.default.Router();
exports.userRoute.get('/protected', (req, res, next) => {
});
exports.userRoute.post('/signin', (req, res, next) => {
});
exports.userRoute.post('/signup', (req, res, next) => {
});
