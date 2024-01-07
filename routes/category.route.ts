import express,{Request,Response,NextFunction} from "express";
import passport from "passport";
import { validPassword } from "../lib/passwordUtils";
import { genPassword } from "../lib/passwordUtils";
import { User } from "../config/database";