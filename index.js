import express from "express";
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
import productRoute from "./back_end/routes/product.route.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

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
