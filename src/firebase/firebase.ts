
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCL5vrTeSfoR9Zf4NUxtitCmGUPkCJ8m6s",
  authDomain: "textapp-9991b.firebaseapp.com",
  projectId: "textapp-9991b",
  storageBucket: "textapp-9991b.appspot.com",
  messagingSenderId: "879357111184",
  appId: "1:879357111184:web:e3cdb43da73079998c6115",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const signUpUser = async (email:string , password:string , username:string) => {
    createUserWithEmailAndPassword(auth , email , password)
    .then((userCredential)=>{
    //  TODO:store user data in real time db here
     return userCredential.user
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;

        return errorCode + "    " + errorMessage ;
    })

};
export const signInUser = async (email:string , password:string ) => {
    signInWithEmailAndPassword(auth , email , password)
    .then((userCredential)=>{
        //TODO: update login status in db here
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;

        return errorCode + "    " + errorMessage ;
    })

};
