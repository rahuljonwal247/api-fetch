// fetchPosts.js
const axios = require('axios');
const Post = require('./post');
const db = require('./db');
const User = require('./user');

const API_BASE_URL = 'https://dummyapi.io/data/v1/user';
const APP_ID = '6513e8b52a878480dd31396e'; // Replace with your app_id

async function fetchAndStorePosts() {
  try {
    const users = await User.find();

    for (const user of users) {
      const response = await axios.get(`${API_BASE_URL}/${user.id}/post`, {
        headers: { 'app-id': APP_ID },
      });

      const postsData = response.data.data;

      // Associate the posts with the user
      postsData.forEach((post) => {
        post.userId = user._id;
      });

      await Post.insertMany(postsData);
    }

    console.log('Posts data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching and storing posts:', error);
  } finally {
    db.connection.close(); // Close the MongoDB connection
  }
}

fetchAndStorePosts();
