import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const WXAPI = process.env.WXAPI;
const Location = process.env.LOCATION;
const WXENDPOINT = process.env.WXENDPOINT;

export const getLocalWeather = async () => {
const query = `${WXENDPOINT}?query=${Location}&access_key=${WXAPI}`;
try {
const response = await axios.get(query);
return response.data;
} catch (error:any) {
throw {status: 500, message: 'Cannot Get Weather Data'};
}
}

//export default getLocalWeather;




