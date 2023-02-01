import express from 'express';
import localWeather from '../controller/weatherController';
import contact from '../controller/contactController';

const app = express();

// Routes

// Route to get local weather API
app.get('/weather', localWeather);
// Route to get contact me endpoint
app.get('/contact', contact)
// Route to retrieve resume pdf
// handling PDF request
app.get("/downloadPDF", (req, res) => {
  try {
    res.download("./server/documents/resume.pdf");
  }
  catch (error) {
    throw { status: 500, message: "There was a problem retrieving the pdf file" };
  }
});

export default app;