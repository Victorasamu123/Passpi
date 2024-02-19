import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt:String,
});

export const UserAuth = mongoose.model('UserAuth',UserSchema);