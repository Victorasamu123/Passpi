import mongoose, { Schema } from "mongoose";

require("dotenv").config();

const connect = process.env.MONGODB as string;

const connection = mongoose.connect(connect);

interface Userss{
    username:string,
    hash:string,
    salt:string
}

const UserSchema = new Schema({
    username:String,
    hash:String,
    salt:String
});

export const User =  mongoose.model("user",UserSchema);

// module.exports = User;