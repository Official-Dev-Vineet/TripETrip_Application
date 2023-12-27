// create express server using http module
import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { config } from "dotenv";
import morgan from "morgan";

// import routes
import { UserRouter } from "./Routes/customer/user.route.js";

// load environment variables using dotenv module
config();

// create express app
const app = express();

// use morgan for logging
app.use(morgan("dev"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// enable cors
app.use(cors());

// connect to mongodb
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@tripetrip.khj9rzw.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri).then((res) => {
  console.log("Connected to MongoDB");
});
// create port for server
const port = process.env.PORT || 3000;

// handle get request

app.get("/", (req, res) => {
  res.status(200).json({
    statusbar: "Server is up and running",
    message: "Welcome to Our TripETrip Application",
    author: "Vineet Singh",
    version: "1.0.0",
    description:
      "We are contemporary travel solution company which provides all types of tour and travel booking services in sectors like Hospitality, Commute & Food Industry.",
    contactViaEmail: "viratsinghkaharwar8923@gmail.com",
    contactViaPhone: "true",
  });
});

// routes for user
app.use("/user", UserRouter);

// create server
const server = http.createServer(app, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
