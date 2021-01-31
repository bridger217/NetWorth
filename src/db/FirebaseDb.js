// import { DbInterface } from './DbInterface';
// import { firebase } from '../firebase/config';

// // Implementation of the db for firebase
// export class FirebaseDb extends DbInterface {
//     constructor() {}

//     CreateUser(email, password, fullName) {
//         new Promise(function(resolve, reject) {
//             firebase
//             .auth()
//             .createUserWithEmailAndPassword(email, password)
//             .then((response) => {
//                 const uid = response.user.uid;
//                 const user = User(uid, email, fullName);
//                 const usersRef = firebase.firestore().collection('users');
//                 usersRef
//                     .doc(uid)
//                     .set(user)
//                     .then(() => {
//                         resolve(user);
//                     })
//                     .catch((error) => {
//                         reject(error);
//                     });
//             })
//             .catch((error) => {
//                 reject(error);
//         });
//         });
//     }
// }