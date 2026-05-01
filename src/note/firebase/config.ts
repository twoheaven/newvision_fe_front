// firebase/config.ts

/**
 * Firebase 초기화 및 Firestore, Storage 객체 export
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const storageBucketFromEnv = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const fallbackStorageBucket = projectId ? `${projectId}.appspot.com` : undefined;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId,
  storageBucket: storageBucketFromEnv || fallbackStorageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// 환경 변수가 제대로 설정되었는지 확인
if (!import.meta.env.VITE_FIREBASE_API_KEY) {
  console.error(
    "Firebase API 키가 설정되지 않았습니다. .env 파일을 확인해주세요.",
  );
}

if (!storageBucketFromEnv && fallbackStorageBucket) {
  console.warn(
    `VITE_FIREBASE_STORAGE_BUCKET이 없어 기본 버킷(${fallbackStorageBucket})을 사용합니다. 필요하면 ${projectId}.firebasestorage.app 도 확인해주세요.`,
  );
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
