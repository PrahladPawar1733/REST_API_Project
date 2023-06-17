import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT|| 5000;
console.log(port);
app.use(bodyParser.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(port, () =>console.log(`Server running on port: http://localhost:${port}`));
