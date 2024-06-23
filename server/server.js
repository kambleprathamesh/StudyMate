const express = require("express");
const App = express();

const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUploads = require("express-fileupload");
const dotenv = require("dotenv");
require("dotenv").config();
const PORT = process.env.PORT;

// import routes
const courseRoute = require("./routes/course");
const paymentRoute = require("./routes/payments");
const profileRoute = require("./routes/profile");
const userRoute = require("./routes/user");
const { cloudinaryConnect } = require("./config/cloudinary");
const dataBase = require("./config/database");

// import middlewarares
App.use(express.json());
App.use(cookieParser());
App.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
App.use(
  fileUploads({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// cloudinary connection
cloudinaryConnect();

// DBconnection
dataBase.connect();

//Mount routes
App.use("/api/v1/course", courseRoute);
App.use("/api/v1/payments", paymentRoute);
App.use("/api/v1/profile", profileRoute);
App.use("/api/v1/user", userRoute);

// Applisten
App.listen(PORT, () => {
  console.log("Server Is Running on Port no: ", PORT);
});

// default Routes
App.get("/", (req, res) => {
  // res.send(`Server is Running on port no ${PORT}`);
  return res.json({
    success: true,
    message: `Server is Running on Port no ${PORT}`,
  });
});
