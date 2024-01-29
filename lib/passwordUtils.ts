import crypto from "crypto";

export function genPassword(password:string){
    let salt = crypto.randomBytes(32).toString("hex");
    let genHash = crypto.pbkdf2Sync(password,salt, 10000, 64, "sha512").toString("hex");

    return{
        salt:salt,
        hash:genHash
    }
}

 export function validPassword (password:string, hash:string, salt:string){
    let hashVerify = crypto.pbkdf2Sync(password,salt,10000,64, "sha512").toString("hex")
 }


// module.exports.validPassword = validPassword;

// module.exports.genPassword = genPassword;