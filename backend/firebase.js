// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
require('dotenv').config()
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyBxu7CtM8T8WQGP0fIkdBu6TE1NAkw-BAk" ,
  authDomain: "ehr-proj.firebaseapp.com",
  projectId:"ehr-proj",
  storageBucket: "ehr-proj.appspot.com",
  messagingSenderId: "586150127183",
  appId: "1:586150127183:web:1f207883eb2def644fec3a",
  measurementId: "G-BK0W9QZ3WQ"
  // apiKey: process.env.FB_apikey,
  // authDomain: process.env.FB_authDomain,
  // projectId: process.env.FB_projectId,
  // storageBucket: process.env.FB_storageBucket,
  // messagingSenderId: process.env.FB_messagingSenderId,
  // appId: process.env.FB_appId,
  // measurementId: process.env.FB_measurementId
};

// Initialize Firebase
const fb_app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(fb_app);

module.exports = {fb_app}