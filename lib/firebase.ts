import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhVx7mkGiyXnWsOE6769M4T7Qa4uZ9uec",
  authDomain: "rollmachine-db89d.firebaseapp.com",
  projectId: "rollmachine-db89d",
  storageBucket: "rollmachine-db89d.firebasestorage.app",
  messagingSenderId: "1087807995130",
  appId: "1:1087807995130:web:e39a177365e0baecce5d43",
  measurementId: "G-HZ4MPS90R9",
};

export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}