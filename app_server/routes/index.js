const express = require('express');
const router = express.Router();
const axios

const apiKey = 'API_KEY';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Weather' });
});
router.post('/', (req,res) => {
  let city = req.body.city;
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then(result => {
           let weather = JSON.parse(body);
           if(weather.main==undefined){
                res.render('index',{weather : null,error:'Error,please give correct input',title:'Weather'})
           }else{
              let weatherText = `Weather at ${weather.name} is ${weather.main.temp} °C`;
              res.render('index',{weather:weatherText,error:null,title:'Weather'});
           }
      })
      .catch(err => {
          res.render('index',{weather:null,error:'Error,please try again',title:'Weather'});
      });
});
module.exports = router;
