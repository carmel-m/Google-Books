const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes
// const booksController = require("./controllers/booksController");
// app.use(booksController);

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://goobooks1:goobooks1@ds237641.mlab.com:37641/heroku_7gv6knp5", {
  useNewUrlParser: true
});

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
//   useNewUrlParser: true
// });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


