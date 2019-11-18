const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }, // stop here if these additions don't work
  question_one: {
    type: String,
    required: true
  },
  answer_one: {
    type: String,
    required: true
  },

  question_two: {
    type: String,
    required: false
  },
  answer_two: {
    type: String,
    required: false
  },

  question_three: {
    type: String,
    required: false
  },
  answer_three: {
    type: String,
    required: false
  },

  question_four: {
    type: String,
    required: false
  },
  answer_four: {
    type: String,
    required: false
  },

  question_five: {
    type: String,
    required: false
  },
  answer_five: {
    type: String,
    required: false
  }

}, { collection : 'post' });

const Post = module.exports = mongoose.model('Post', postSchema);
