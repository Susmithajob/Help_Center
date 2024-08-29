import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import addCardRoute from "./Routes/addCard.js";
import getAllCardRoute from "./Routes/getAllCard.js";
import getCardByTitleRoute from "./Routes/getCardByTitle.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

const PORT = process.env.PORT || 5000;
const CONNECTION = process.env.CONNECTION_STRING;

app.use('/api/cards', addCardRoute); 
app.use('/api/cards', getAllCardRoute); 
app.use('/api/cards', getCardByTitleRoute); 

mongoose.connect(CONNECTION)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
