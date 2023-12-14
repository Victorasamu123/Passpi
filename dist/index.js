"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require("dotenv").config();
const PORT = process.env.PORT || 4500;
app.get("/", (req, res) => {
    res.send("");
});
app.get("/justy", (req, res) => {
    res.send("I am the next big thing ");
});
app.listen(PORT, () => {
    console.log(`port listening at port ${PORT}`);
});
