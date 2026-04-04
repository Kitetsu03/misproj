import express from "express";
import mongoose from "mongoose";
import productRoute from "./back_end/routes/product.route.js";
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

//test route
app.get("/", (req, res) => {
  res.send("Hello, from node API Server in react!");
});

// Database connection and server start
mongoose
  .connect(
    "mongodb+srv://marcnarvelortegoza_db_user:Jkp5l6TAjy6lsUKX@backenddb.4iwccoc.mongodb.net/Node-API?appName=BackendDB",
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Error connecting to MongoDB");
  });
