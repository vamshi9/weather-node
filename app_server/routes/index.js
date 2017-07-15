var express = require('express');
var router = express.Router();
const request = require('request');
const apiKey = '#';
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Weather' });
});
router.post('/',function(req,res){
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  request(url,function(err,response,body){
    if(err){
       res.render('index',{weather:null,error:'Error,please try again'});
    }else{
       let weather = JSON.parse(body);
       if(weather.main==undefined){
            res.render('index',{weather : null,error:'Error,please give correct input'})
       }else{
          let weatherText = `Weather at ${weather.name} is ${weather.main.temp} °C`;
          res.render('index',{weather:weatherText,error:null});
       }
    }
  });
});
module.exports = router;
