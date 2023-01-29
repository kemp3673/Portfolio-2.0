import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const query = process.env.LOCATION;
const url = process.env.WXURL;
const key = process.env.WXKEY;
const host = process.env.WXHOST;

const getLocalWeather = async () => {
  // API Documentation: https://rapidapi.com/weatherapi/api/weatherapi-com
  const options = {
    method: "GET",
    url: url,
    params: { q: query },
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error: any) {
    throw { status: 500, message: "Cannot Get Weather Data" };
  }
};

export default getLocalWeather;
