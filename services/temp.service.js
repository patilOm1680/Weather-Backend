import axios from "axios";

export const getTempData = async (city) => {
  try {
    const url = `${process.env.BASE_URL}?q=${city}&appid=${process.env.API_KEY}&units=metric`;

    const response = await axios.get(url);

    return response.data.main;
  } catch (error) {
    console.log(error);
  }
};
