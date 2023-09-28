// post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  // Define post schema fields based on API response
  // Example: title, body, userId, etc.
  title: {
    type: String,
   
  },
  body: {
    type: String,
    
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model to establish a relationship
    
  },
});

module.exports = mongoose.model('Post', postSchema);
