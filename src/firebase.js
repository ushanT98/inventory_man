import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp_KdezihrnyEeb_zp7xCffkm1PEF3CYI",
  authDomain: "warehouse-ccp.firebaseapp.com",
  projectId: "warehouse-ccp",
  storageBucket: "warehouse-ccp.appspot.com",
  messagingSenderId: "481309975939",
  appId: "1:481309975939:web:6ddea12399385c284f82b6",
  measurementId: "G-LRPB96BLJV"
};


//Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export const auth = getAuth(app);
// export default app;


