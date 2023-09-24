import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcOxsgBlNj9FPRZ60dKWB7SRE598DJyWw",
  authDomain: "roma-f921d.firebaseapp.com",
  projectId: "roma-f921d",
  storageBucket: "roma-f921d.appspot.com",
  messagingSenderId: "94965748078",
  appId: "1:94965748078:web:f4157fdfcf27911d14b17f",
  measurementId: "G-Q0D5VRKQM8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);    
const weekCollectionsRef = collection(db , "data_week");  

export const getAllTasks = async () => {
  const data = await getDocs(weekCollectionsRef);
  return data.docs.map((doc) => ({ ...doc.data() , id : doc.id }))
}
