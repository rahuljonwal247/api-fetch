// fetchUsers.js
const axios = require('axios');
const User = require('./user');
const db = require('./db');

const API_URL = 'https://dummyapi.io/data/v1/user';
const APP_ID = '6513e8b52a878480dd31396e'; // Replace with your app_id

async function fetchAndStoreUsers() {
  try {
    const response = await axios.get(API_URL, {
      headers: { 'app-id': APP_ID },
    });

    const usersData = response.data.data;

    await User.insertMany(usersData);

    console.log('Users data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching and storing users:', error);
  } finally {
    db.connection.close(); // Close the MongoDB connection
  }
}

fetchAndStoreUsers();
