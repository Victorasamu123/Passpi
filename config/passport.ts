import passport from "passport";
import localStrategy from "passport-local";
import {User} from "./database"


const LocalStrategy = localStrategy.Strategy;