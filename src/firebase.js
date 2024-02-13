import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCk8R8bHzozbol87QD_aZ6tUA4A8EBqRMY",
  authDomain: "ehrinternship-6270e.firebaseapp.com",
  projectId: "ehrinternship-6270e",
  storageBucket: "ehrinternship-6270e.appspot.com",
  messagingSenderId: "858343264546",
  appId: "1:858343264546:web:0da4e9bdcfd2d3c1e8957b"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);