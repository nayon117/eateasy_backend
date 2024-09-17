import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

// connect to database
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("connected to database"));

// middleware  
const app = express();
app.use(express.json());
app.use(cors());


// routes and listener
app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
