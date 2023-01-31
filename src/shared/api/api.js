import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB6JEeFjRbChK2zLFkOnyir4Ao5wUZDoTs",
  authDomain: "fruti-d3a43.firebaseapp.com",
  projectId: "fruti-d3a43",
  storageBucket: "fruti-d3a43.appspot.com",
  messagingSenderId: "984169319963",
  appId: "1:984169319963:web:f9ce633e2e1cf4953c72be",
};

initializeApp(firebaseConfig);

const dbRef = ref(getDatabase());

export const getData = async (id) => {
  try {
    const result = await get(child(dbRef, `${id}`));
    if (result.exists()) {
      return result.val();
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.log(console.error);
  }
};
