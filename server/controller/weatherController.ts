import { Request, Response } from 'express';
import getLocalWeather from '../model/weatherModel';

const localWeather = (req: Request, res: Response) => {
getLocalWeather()
.then((data: any) => {
res.status(200).send(data);
})
.catch((err: { message: any; }) => {
res.status(500).send(err.message);
});
}

export default localWeather;