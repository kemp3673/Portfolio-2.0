const request = require("supertest");
const server = require("./index.ts");
const axios = require("axios");
const nodemailer = require("nodemailer");
const { getLocalWeather } = require("./model/model");

jest.mock("axios");
jest.mock("nodemailer");

axios.get = jest.fn();
nodemailer.createTransport = jest.fn();

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
            country: "United States of America",
            lat: "36.530",
            localtime: "String",
            localtime_epoch: 1,
            lon: "-87.359",
            name: "Clarksville",
            region: "Tennessee",
            timezone_id: "America/Chicago",
            utc_offset: "-6.0",
          },
          current: {
            cloudcover: 1,
            feelslike: 1,
            humidity: 1,
            is_day: "yes",
            observation_time: "string",
            precip: 1,
            pressure: 1,
            temperature: 1,
            uv_index: 1,
            visibility: 1,
            weather_code: 1,
            weather_descriptions: [],
            weather_icons: [],
            wind_degree: 1,
            wind_dir: "String",
            wind_speed: 1,
          },
          request: {
            language: "en",
            query: "Clarksville, United States of America",
            type: "City",
            unit: "m",
          },
        },
      };
      axios.get.mockResolvedValueOnce(mockResponse);
      // Using supertest to make a request to the server
      const response = await request(server).get("/weather");
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(mockResponse.data);
    });

    it("Unsuccessful Attempt - 500", async () => {
      const mockError = new Error("Cannot Get Weather Data");
      axios.get.mockRejectedValue(mockError);
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
  describe("Route '/contact'", () => {
    it("Successful Attempt - 200", async () => {
      expect(false).toBe(true);
    });
    it("Unsuccessful Attempt - 500", async () => {
      expect(false).toBe(true);
    });
  });
  // it("Returns successful when form submitted", async () => {
  //   // TODO - Mock the sendEmail function
  //   //let spy = jest.spyOn(sendEmail.sendEmail, 'sendEmail').mockImplementation(() => {return true});
  //   const response = await request(server).post("/contact").send({
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "test@test.com",
  //     phone: "1234567890",
  //     message: "Hello World",
  //   });
  //   expect(response.statusCode).toBe(200);
  //   expect(response.body).toEqual(
  //     expect.objectContaining({
  //       success: true,
  //       message: "Email Sent",
  //     })
  //   );
  // });

  // it("Returns error when form submitted with improper user/password", async () => {
  //   const response = await request(server).post("/contact").send({
  //     user: "wrongUser@gmail.com",
  //     password: "wrongPassword",
  //     firstName: "Jest",
  //     lastName: "Testing",
  //     email: "test@test.com",
  //     phone: "1234567890",
  //     message: "This is a test",
  //   });
  //   expect(response.statusCode).toBe(500);
  //   expect(response.body).toEqual(
  //     expect.objectContaining({
  //       success: false,
  //       message: "Email failed to send",
  //     })
  //   );
  // });
});
