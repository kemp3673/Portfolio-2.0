const request = require("supertest");
const server = require("./app.ts");
const axios = require("axios");
const nodemailer = require("nodemailer");
// const { getLocalWeather } = require("./model/model");

// jest.mock("axios");
// jest.mock("nodemailer");

// axios.get = jest.fn();
// nodemailer.createTransport = jest.fn();

describe("Server", () => {
  afterEach(async () => {
    await server.close();
    jest.clearAllMocks();
  });
  describe("Route '/'", () => {
    it("Successful request", async () => {
      const response = await request(server).get("/");
      expect(response.statusCode).toBe(200);
    });

    it("Request to route that doesn't exist", async () => {
      const response = await request(server).get("/wrong");
      expect(response.statusCode).toBe(404);
    });

    it("POST request to handler that does not exist", async () => {
      const response = await request(server).post("/");
      expect(response.statusCode).toBe(404);
    });
  });
  describe("Route '/weather'", () => {
    it("Successful Attempt - 200", async () => {
      const mockResponse = {
        statusCode: 200,
        data: {
            location: {
              name: 'Clarksville',
              region: 'Tennessee',
              country: 'USA',
              lat: 36.52,
              lon: -87.27,
              tz_id: 'America/Chicago',
              localtime_epoch: 1674979485,
              localtime: '2023-01-29 2:04'
            },
            current: {
              last_updated_epoch: 1674979200,
              last_updated: '2023-01-29 02:00',
              temp_c: 8.9,
              temp_f: 48,
              is_day: 0,
              condition: {
                text: 'Overcast',
                icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
                code: 1009
              },
              wind_mph: 10.5,
              wind_kph: 16.9,
              wind_degree: 160,
              wind_dir: 'SSE',
              pressure_mb: 1018,
              pressure_in: 30.06,
              precip_mm: 0.9,
              precip_in: 0.04,
              humidity: 71,
              cloud: 100,
              feelslike_c: 6.1,
              feelslike_f: 42.9,
              vis_km: 16,
              vis_miles: 9,
              uv: 1,
              gust_mph: 19,
              gust_kph: 30.6
          }
        }
      };
      axios.request.mockImplementation(() => Promise.resolve(mockResponse));
      const response = await request(server).get("/weather");
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(mockResponse.data);

      /*** Another way to test ***/
      // axios.get.mockResolvedValueOnce(mockResponse);
      // const response = await request(server).get("/weather");
      // expect(response.statusCode).toBe(200);
      // expect(response.body).toEqual(mockResponse.data);
    });

    it("Unsuccessful Attempt - 500", async () => {
      const mockError = new Error("Cannot Get Weather Data");
      axios.request.mockRejectedValue(mockError);
      const response = await request(server).get("/weather");
      expect(response.statusCode).toBe(500);
      expect(response.text).toEqual("Cannot Get Weather Data");

      // Calling on model function to test
      // return getLocalWeather().catch((error) => {
      //   expect(error.message).toEqual(mockError);
      //   expect(error.status).toEqual(500);
      // });
    });
  });
  // describe("Route '/contact'", () => {
  //   it("Successful Attempt - 200", async () => {
  //     expect(false).toBe(true);
  //   });
  //   it("Unsuccessful Attempt - 500", async () => {
  //     expect(false).toBe(true);
  //   });
  // });
});
