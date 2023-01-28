import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from "path";
import compression from "compression";
import localWeather from "./controller/controller";


// Load env variables
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;


// Middlewares
app.use(compression());
app.use(cors());
app.use(express.json());

// Routes
app.use(express.static(path.join(__dirname, "../public")));
app.get('/weather', localWeather);

// Path: server/src/index.ts
const server = app.listen(PORT, () => console.log(`Server Running here 👉 https://localhost:${PORT}`));
module.exports = server;