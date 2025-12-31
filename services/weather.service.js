import axios from "axios";
import logger from "../logs/logger.js";

export const getCityWeather = async (city) => {
  try {
    const url = `${process.env.BASE_URL}?q=${city}&appid=${process.env.API_KEY}&units=metric`;

    const response = await axios.get(url);

    const data = response.data;
    if (data.name.toLowerCase() !== city.toLowerCase()) {
      logger.error({
        cod:404,
        messege: "City not found",
      })
      return {
        status: 404,
        data: {
          cod: "404",
          message: "City not found",
        },
      };
    }
    logger.info(`Fetching weather data for ${city} city.`)
    return { status: 200, data: response.data };
  } catch (error) {
    logger.error({ status: error.response.status, data: error.response.data })
    return { status: error.response.status, data: error.response.data };
  }
};
