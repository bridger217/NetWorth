// // "Abstract" base class that provides the db interface while hiding backend details.s
// export class DbInterface {
//     constructor() {
//         if (new.target === DBInterface) {
//             throw new TypeError(
//                 "DBInterface is abstract. Please instantiate a child class that implements",
//                 " the interface.");
//           }
//     }

//     /*
//     ***************************************************************************************
//     User Resource IO
//     ***************************************************************************************
//     */

//     // Types that child classes will need to conform to after fetching user data.
//     static User(uid, email, fullName) {
//         this.uid = uid;
//         this.email = email;
//         this.email = fullName;
//     }

//     // Returns a promise to the user object created in the backend.
//     CreateUser(email, password, fullName) {
//         throw new TypeError(
//             "DBInterface is abstract. Please instantiate a child class that implements",
//             " the interface.");
//     }

//     // Retrieves a user from the backend.
//     GetUser(uid) {
//         throw new TypeError(
//             "DBInterface is abstract. Please instantiate a child class that implements",
//             " the interface.");
//     }


// }