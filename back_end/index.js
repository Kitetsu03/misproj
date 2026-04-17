import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import mongoose from "mongoose";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import memberRoutes from "./routes/member.routes.js";
import lifegroupRoutes from "./routes/lifegroup.routes.js";
import ministryRoutes from "./routes/ministry.routes.js";
import attendanceRoutes from "./routes/attendance.routes.js";
import lgAttendanceRoutes from "./routes/lifegroupAttendance.routes.js";
import contributionRoutes from "./routes/contribution.routes.js";
import expenseRoutes from "./routes/expense.routes.js";

import productRoute from "./routes/product.route.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/lifegroups", lifegroupRoutes);
app.use("/api/ministries", ministryRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/lifegroup-attendance", lgAttendanceRoutes);
app.use("/api/contributions", contributionRoutes);
app.use("/api/expenses", expenseRoutes);

app.use("/api/products", productRoute);

//test route
app.get("/", (req, res) => {
  res.send("Hello, from node API Server in react!");
});

// Database connection and server start
mongoose.connect(process.env.CONNECTION_STRING);
try {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
} catch (error) {
  console.error(process.env.PORT);
  console.log("Error connecting to MongoDB");
}
