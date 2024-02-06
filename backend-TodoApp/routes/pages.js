// const express = require('express');
// const authController = require('../auth/auth');

// const router = express.Router();

// router.get('/', authController.isLoggedIn, (req, res) => {
//   if (req.user) {
//     // If the user is logged in, return the user object as JSON
//     res.status(200).json({ user: req.user });
//   } else {
//     // If the user is not logged in, indicate so with a 401 status code and message
//     res.status(401).json({ message: "User is not logged in" });
//   }
// });

// // router.get('/', authController.isLoggedIn, (req, res) => {
// //   res.render('index', {
// //     user: req.user
// //   });
// // });

// router.get('/register', (req, res) => {
//   res.json('register')
// });

// router.get('/login', (req, res) => {
//   res.json('login');
// });

// // router.get('/profile', authController.isLoggedIn, (req, res) => {
// //   console.log(req.user);
// //   if( req.user ) {
// //     res.render('profile', {
// //       user: req.user
// //     });
// //   } else {
// //     res.redirect('/login');
// // }
  
// //})

// module.exports = router;