import { getTempData } from "../services/temp.service.js"

export const getTempByCity = async(req,res) => {
    const {city}=req.params;
    const data=await getTempData(city);
    res.send(data)
}

