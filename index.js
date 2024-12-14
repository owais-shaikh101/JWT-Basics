import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connection.js";
import {
  errorHandlingMiddleware,
  notFoundError,
} from "./middlewares/errorHandler.js";
import userRoutes from "./routes/users.js";

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use("/users", userRoutes);
app.use(errorHandlingMiddleware);
app.use(notFoundError);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
