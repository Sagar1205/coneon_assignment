import dotenv from "dotenv";
dotenv.config();

import express from "express";
import orderRoutes from "./routes/orderRoutes.js";
import sequelize from "./models/db.js";

const app = express();

app.use(express.json());
app.use("/api", orderRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to DB");

    await sequelize.sync({ alter: true });
    console.log("Models synchronized");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("DB Connection Error:", error.message);
  }
};

startServer();
