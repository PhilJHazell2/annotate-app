import firebase from 'firebase/app'
const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: "1:1072620880838:web:49fd677b932c53948b28c7"
};
firebase.initializeApp(config);
export default firebase;

console.log(firebase.app().options)