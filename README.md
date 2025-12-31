# Weather app-backend
It is a backend of weather app which provides the complete weather information according to the city.
Hosted on [Render](https://dashboard.render.com/)

## 🧰 Tech Stack
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [Joi Validator](https://joi.dev/api/?v=17.13.3)
- [Winston (Logger)](https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/)


# API endpoints

Routing Service 

Base URL
```
https://weather-79q9.onrender.com
```

- Fetch Weather Data By City (/weather)
```
https://weather-79q9.onrender.com/weather
```

- Pass the City Name in Body According to following formate
```
{"city":"CityName"}
```

# Run Locally
```
git clone git@github.com:patilOm1680/Weather-Backend.git
```
```
cd Weather-Backend
```

```
npm install
```

```
npm start
```
- Fetch Weather Data By City (/weather)
```
http://localhost:3000/weather
```

- Pass the City Name in Body According to following formate
```
{"city":"CityName"}
```
