// user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define user schema fields based on API response
  // Example: name, email, etc.
  first_name: {
    type: String,
   
  },
  last_name: {
    type: String,
   
  },
  email_address: {
    type: String,
   
    unique: true,
  },
});

module.exports = mongoose.model('User', userSchema);
