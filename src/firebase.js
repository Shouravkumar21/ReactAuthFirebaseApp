import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChg61faJDlKzDgyQldEPIlkFkDKCfN4oA",
  authDomain: "sign-up-32bef.firebaseapp.com",
  projectId: "sign-up-32bef",
  storageBucket: "sign-up-32bef.appspot.com",
  messagingSenderId: "569008437663",
  appId: "1:569008437663:web:ed73fe590ae0c9821aa5aa",
  databaseURL: "https://sign-up-32bef-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
