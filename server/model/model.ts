import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import http from "http";
import axios from "axios";

dotenv.config();

class WeatherModel {
  public static async getLocalWeather() {
    const WXAPI = process.env.WXAPI;
    const Location = process.env.LOCATION;
    const WXENDPOINT = process.env.WXENDPOINT;
    const query = `${WXENDPOINT}?query=${Location}&access_key=${WXAPI}`;
    console.log(query);
    console.log(WXAPI);
    try {
      const response = await axios.get(query);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default WeatherModel;
