import logger from "../middleware/logs/logger.js";
import { getCityWeather } from "../services/weather.service.js";

export const getWeatherByCity = async (req, res) => {
  try {
    const city = req.body.city;
    // console.log(city);
    
    // if (city == "" || city == undefined) {
    // //   console.log("city empty");
    // logger.error({
    //     cod:404,
    //     messege: "City name is empty",
    //   })
    //   return res.status(404).json({
    //     cod:404,
    //     messege: "City name is empty",
    //   });

    // } 

      const data = await getCityWeather(city);
    
      res.status(data.status).json(data.data);
    
  } catch (error) {
    logger.error("Error while fetching the data",error)
    // console.log("error");
    throw new error(error)
  }
};
