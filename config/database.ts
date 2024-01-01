import mongoose from "mongoose";

require("dotenv").config();

const connect = process.env.MONGODB as string;

const connection = mongoose.connect(connect);

interface Userss{
    username:string,
    hash:string,
    salt:string
}

const UserSchema = new mongoose.Schema<Userss>({
    username:String,
    hash:String,
    salt:String
});

export const User =  mongoose.model("user",UserSchema);

module.exports = User;