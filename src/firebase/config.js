import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: '',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'networth-ead69',
  storageBucket: 'networth-ead69.appspot.com',
  messagingSenderId: '416752242270',
  appId: '1:416752242270:ios:27672cae15297b9f43aecf',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
