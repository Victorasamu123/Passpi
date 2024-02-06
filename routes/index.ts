import express,{Request,Response,NextFunction} from "express";
import passport from "passport";
import { genPassword, validPassword } from "../lib/passwordUtils";
import { User } from "../config/database";

export const router = express.Router();

// post routess //

router.post("/signin", passport.authenticate("local", {failureRedirect:"/login-failure", successRedirect:"/login-success"}),(req,res,next)=>{
  console.log(passport.authenticate("local"))
}
);

router.post("/signup",async (req:Request,res:Response,next:NextFunction)=>{
  console.log(req.body);
  const saltHash = await genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username:req.body.username,
    hash:hash,
    salt:salt,
  });

  newUser.save().then((user)=>{
    console.log(user)
  });

  res.redirect("/signin");
});

//  get route //

router.get("/" , (req:Request, res:Response, next:NextFunction)=>{
    res.send(`<h1>Home</h1><p>Please <a href="/signup">register</a></p>`);
});

router.get("/signin" , (req:Request, res:Response, next:NextFunction)=>{
    const form = `<<h1>Login Page</h1><form method="POST" action="/signin">\ Enter Username:<br><input type="text" name="username">\ <br>Enter Password:<br><input type="password" name="password">\ <br><br><input type="submit" value="Submit"></form>`

    res.send(form);
});

router.get("/signup" , (req:Request, res:Response, next:NextFunction)=>{
    const form = `<<h1>Register Page</h1><form method="POST" action="/signup">\ Enter Username:<br><input type="text" name="username">\ <br>Enter Password:<br><input type="password" name="password">\ <br><br><input type="submit" value="Submit"></form>`

    res.send(form);
});

/**
 * Lookup how to authenticate users on routes with Local Strategy
 * Google Search: "How to use Express Passport Local Strategy"
 * 
 * Also, look up what behaviour express session has without a maxage set
 */


router.get('/protected-route', (req:Request, res:Response, next:NextFunction )=> {
    
    // This is how you check if a user is authenticated and protect a route.  You could turn this into a custom middleware to make it less redundant
    if (req.isAuthenticated()) {
        res.send('<h1>You are authenticated</h1><p><a href="/logout">Logout and reload</a></p>');
    } else {
        res.send('<h1>You are not authenticated</h1><p><a href="/login">Login</a></p>');
    }
});

// Visiting this route logs the user out
router.get('/logout', (req:Request, res:Response, next:NextFunction) => {
    req.logout((err) => {
        if (err) {
          console.error('Error logging out:', err);
          res.status(500).send('Error logging out');
        } else {
          req.session.destroy((err) => {
            if (err) {
              console.error('Error destroying session:', err);
              res.status(500).send('Error destroying session');
            } else {
              res.redirect('/'); // Redirect to the homepage or login page
            }
          }); 
        }
      });
    res.redirect('/protected-route');
});

router.get('/login-success', (req:Request, res:Response, next:NextFunction) => {
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
});

router.get('/login-failure', (req, res, next) => {
    res.send('You entered the wrong password.');
});






  