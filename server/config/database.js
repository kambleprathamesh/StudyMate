const mongoose = require("mongoose");
require("dotenv").config();
exports.connect = () => {
  mongoose
    .connect(process.env.DataBase_URL)
    .then(() => {
      console.log("Database Connected Succesfully");
    })
    .catch((err) => {
      console.log("Database not Connected", err);
      console.error(err);
      process.exit(1);
    });
};
