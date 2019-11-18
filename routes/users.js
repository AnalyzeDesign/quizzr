const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (request, response, next) => {
  // Initial route test (with router.get):
  //response.send('REGISTER');

  let newUser = new User({
    name: request.body.name,
    email: request.body.email,
    username: request.body.username,
    password: request.body.password
  });


  User.addUser(newUser, (error, user) => {
    if (error) {
      response.json({success: false, msg: 'Failed to register user' +newUser.name});
    } else {
      response.json({success: true, msg:'User registered: ' +user});
    }
  });
});

// Authenticate:
/*
If this request is successful, you would store this token and user inside of your cookies or localstorage, then when you want to make a request to a protected route you have to include that token in the header.

Successful example:
request:
POST to
http://localhost:3000/users/register
HEADERS: Content-Type: application/json
PAYLOAD:
{"username":"john","password":"123456"}

RESPONSE:
200 OK

{
    "success": true,
    "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDk3NWJhNjM4MTNjYjBhMDYzY2NkYmMiLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5kb2VAZW1haWwuY29tIiwidXNlcm5hbWUiOiJqb2huIiwicGFzc3dvcmQiOiIkMmEkMTAkZUdGNG1ueDBuOVduVnJuNWQvWTU5ZWlFY2FxeUxQc2JZSTgvTnA3WlFmc0QwUlZZamJQYVciLCJfX3YiOjAsImlhdCI6MTU3MDIxMTk3OSwiZXhwIjoxNTcwODE2Nzc5fQ.IKSACBVijJD94B0I4bNZ_Q2sD0AR4lEqg_TADjWw9DA",
    "user": {
        "id": "5d975ba63813cb0a063ccdbc",
        "name": "John Doe",
        "username": "john",
        "email": "johndoe@email.com"
    }
}
*/
router.post('/authenticate', (request, response, next) => {
  const username = request.body.username;
  const password = request.body.password;

  User.getUserByUsername(username, (error, user) => {
    if(error) throw error;
    if(!user) { // if no user returned
      return response.json({success: false, msg: 'User not found'});
    }
    // If user is found, use comparePassword function that will be created in User model:
    User.comparePassword(password, user.password, (error, isMatch) => {
      if(error) throw error;
      if(isMatch) { // matches password
        console.log('user.toJSON:', user.toJSON());
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn:604800 // 1 week (seconds)
        });

        response.json({
          success: true,
          token: 'Bearer ' +token,
          user: {
            id: user._id,
            name: user.name
          }
        });

      } else {
        return response.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile Route
// Protect for only logged in user,
// just add this as second parameter to router.get:
// passport.authenticate('jwt', {session:false})
router.get('/profile', passport.authenticate('jwt', {session:false}),
    (request, response, next) => {
      response.json({user: request.user});

    }
);



module.exports = router;
