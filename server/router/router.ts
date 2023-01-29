import express from 'express';
import localWeather from '../controller/weatherController';
import contact from '../controller/contactController';

const app = express();

// Routes

// Route to get local weather API
app.get('/weather', localWeather);
// Route to get contact me endpoint
app.get('/contact', contact)

export default app;