const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const Post = require('./models/post');

// Connect to database using mongoose
mongoose.connect(config.database, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// Notify when connected
mongoose.connection.on('connected',
() => {
  console.log('Hey! Connected to database ' +config.database);
});

// Notify if database error
mongoose.connection.on('error',
(err) => {
  console.log('Hey! Database error ' +err);
});

const app = express();

// create route
const users = require('./routes/users');

// // Port for local use:
// const port = 3000;

//Port for Heroku:
const port = process.env.PORT || 8080;

// CORS ExpressJS Middleware // allows us to make request to our api from a different domain name
// Could create, but quicker to use this (options at npmjs.com/package/cors)
app.use(cors());

// Set Static Folder: Place to put client-side (angular) files
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware for authentication and token (protect certain routes)
// Use a strategy with passport-jwt (js web token)
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// point to route(s)
app.use('/users', users);

// index route
app.get('/', (request, response) => {
  response.send('Invalid Endpoint');
});

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// return posts route
app.post('/api/post/getAllPost', (req, res) => {
    mongoose.connect(config.database, { useMongoClient: true } , function(err){
        if(err) {
          console.log('there has been an error connecting to posts:');
          throw err;
        }
        Post.find({},[],{ sort: { _id: -1 } },(err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            });
        });
    });
});

// add post route
app.post('/api/post/createPost', (req, res) => {
    // insert the details to MongoDB
    mongoose.connect(config.database, { useMongoClient: true }, function(err){
        if(err) throw err;
        console.log('connection established ');

        const post = new Post({
            title: req.body.title,
            description: req.body.description,

            question_one: req.body.question_one,
            answer_one: req.body.answer_one,

            question_two: req.body.question_two,
            answer_two: req.body.answer_two,

            question_three: req.body.question_three,
            answer_three: req.body.answer_three,

            question_four: req.body.question_four,
            answer_four: req.body.answer_four,

            question_five: req.body.question_five,
            answer_five: req.body.answer_five
        });

        post.save((err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            });
        });
    });

})

// update post route
app.post('/api/post/updatePost', (req, res) => {
    mongoose.connect(config.database, {}, function(err) {
      if (err) throw err;
      console.log('connected to api/post/updatePost successfully');

      Post.update(
        {
          _id: req.body.id
        },
        {
          title: req.body.title,
          description: req.body.description,

          question_one: req.body.question_one,
          answer_one: req.body.answer_one,

          question_two: req.body.question_two,
          answer_two: req.body.answer_two,

          question_three: req.body.question_three,
          answer_three: req.body.answer_three,

          question_four: req.body.question_four,
          answer_four: req.body.answer_four,

          question_five: req.body.question_five,
          answer_five: req.body.answer_five
         },
        (err, doc) => {
          if (err) throw err;
          return res.status(200).json({
            status: 'success',
            data: doc
          });
        });
    });
});

// delete post route
app.post('/api/post/deletePost', (req, res) => {
  mongoose.connect(config.database, { useMongoClient: true }, function(err){
  // connection established
  if(err) throw err;
      Post.findByIdAndRemove(req.body.id,
          (err, doc) => {
          if(err) throw err;
          return res.status(200).json({
              status: 'success',
              data: doc
          });
      });
  });
});

// start server
app.listen(port, () => {
  console.log('Server started on port ' +port);
});
