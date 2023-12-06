// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const { database } = require("../config/databaseConfig");

// const { SECRET_KEY } = process.env;

// const signIn = async ({ username, password }) => {
//   try {
//     const user = await database.one(
//       "SELECT * FROM users WHERE username = $(username)",
//       {
//         username: username,
//       }
//     );
//     if (user) {
//       const originalPassword = user.password;
//       const userCheck = bcrypt.compareSync(password, originalPassword);
//       if (userCheck) {
//         const token = jwt.sign(user, SECRET_KEY, { expiresIn: 60 * 60 });
//         return token;
//       } else {
//         return "invalid password";
//       }
//     }
//   } catch (e) {
//     return e;
//   }
// };
// // signIn();
// module.exports = { signIn };