import { Request, Response } from 'express';
import WeatherModel from '../model/model';


class WeatherController {
  public static localWeather(req: Request, res: Response) {
    WeatherModel.getLocalWeather()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default WeatherController;