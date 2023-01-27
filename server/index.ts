import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import compression from "compression";
import WeatherController from "./controller/controller";


// Load env variables
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;


// Middlewares
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
// app.get('/', (req: Request, res: Response) => {
//   res.status(200).send('Hello World!');
// });
app.use(express.static(path.join(__dirname, "../public")));
app.get('/weather', WeatherController.localWeather);


// // Start the server
// app.listen(PORT, ():void => {
//   console.log(`Server Running here 👉 https://localhost:${PORT}`);
// });

// Path: server/src/index.ts
const server = app.listen(PORT, () => console.log(`Server Running here 👉 https://localhost:${PORT}`));
module.exports = server;