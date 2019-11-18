const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');

module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log('jwt_payload:', jwt_payload);
    User.getUserById(jwt_payload._id, (err, user) => {
      if(err){
        return done(err, false);
      }
      if(user){
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  }));
}
/*
UPDATE (12/15/2017):

If you want this code to work, you are going to need to make a few changes:

1. In your passport.js file, you need to change

ExtractJwt.fromAuthHeader

to ---------------->

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

2. In your passport.js file, you need to change

User.getUserById(jwt_payload._id, ................

to ------------------->

User.getUserById(jwt_payload.data._id

3.  In users.js, you need to change

token: 'JWT '+token

to --------------------->

token: 'Bearer '+token
(MAKE SURE TO PUT A SPACE AFTER "Bearer"!!!!)

4.  If you are unable to console.log(jwt_payload) like Brad suggests, make sure you have fixed the first three things above and then make sure you have recopied the new javascript web token into Postman!
*/
