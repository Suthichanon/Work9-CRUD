import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getFirestore } from 'firebase/firestore'

import App from './App.vue';
import router from './router';

import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBDciYFbeynnMNbHd0iz8S4q-JqOnr3Qow",
  authDomain: "fir-login-b0456.firebaseapp.com",
  projectId: "fir-login-b0456",
  storageBucket: "fir-login-b0456.appspot.com",
  messagingSenderId: "411216120529",
  appId: "1:411216120529:web:89f34b083e7733895ad3f0"
};
const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');