// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB1EFSdsWDJiirzpPXv18IipnzftBnNq4",
  authDomain: "colmandevclubwebsite.firebaseapp.com",
  databaseURL: "https://colmandevclubwebsite-default-rtdb.firebaseio.com",
  projectId: "colmandevclubwebsite",
  storageBucket: "colmandevclubwebsite.appspot.com",
  messagingSenderId: "582478846954",
  appId: "1:582478846954:web:05c1bbcf6598b90f333093",
  measurementId: "G-B7CWWQRGFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

   
export const addUser = async (user) => {
    
    try {
        const docRef = await addDoc(collection(db, "users"), user);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        //TODO : send to Google Analytics an event with the user.
        console.error("Error adding document: ", e);
      }
}

    //useForm hook, formic;