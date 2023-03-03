import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBDciYFbeynnMNbHd0iz8S4q-JqOnr3Qow",
    authDomain: "fir-login-b0456.firebaseapp.com",
    projectId: "fir-login-b0456",
    storageBucket: "fir-login-b0456.appspot.com",
    messagingSenderId: "411216120529",
    appId: "1:411216120529:web:89f34b083e7733895ad3f0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const UserRef = collection(db, "cities");
export default UserRef;