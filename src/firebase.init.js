// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
          apiKey: "AIzaSyBQT-B4RIOLEc86DuMwt2aGEbmN9bhU4lM",
          authDomain: "books-warehouse-510d4.firebaseapp.com",
          projectId: "books-warehouse-510d4",
          storageBucket: "books-warehouse-510d4.appspot.com",
          messagingSenderId: "430418862528",
          appId: "1:430418862528:web:c4fc794af2e7dd5faaa825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// declare auth
const auth = getAuth(app);

export default auth;