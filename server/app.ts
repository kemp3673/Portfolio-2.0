import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from "path";
import compression from "compression";
import router from "./router/router";
//TODO - import router library

// Load env variables
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;


// Middlewares
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(router)


// Path: server/src/index.ts
const server = app.listen(PORT, () => console.log(`Server Running here 👉 https://localhost:${PORT}`));
module.exports = server;