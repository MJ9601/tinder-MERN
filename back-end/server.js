import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cards from "./models/dbCards";

const corsOptions = {
  origin: "*",
  Credential: true,
  optionSuccessStatus: 200,
};

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(cors(corsOptions));

dotenv.config();
const connectionUrl = `mongodb+srv://amin:${process.env.DB_PASSWORD}@cluster0.his9s.mongodb.net/tinderdb?retryWrites=true&w=majority`;

let db = mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/tinderCard", (req, res) => {
  const newCard = req.body;

  Cards.create(newCard, (err, resp) =>
    err ? res.status(500).send(err) : res.status(201).send(resp)
  );
});

app.get("/tinderCard", (req, res) => {
  Cards.find((err, resp) =>
    err ? res.status(500).send(err) : res.status(200).send(resp)
  );
});

app.listen(port, () => console.log(`server is running on PORT ${port}.... `));
