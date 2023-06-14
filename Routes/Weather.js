const express=require('express')
const router=express.Router()
const{getWeather, AddaWeather, getCity}=require('../Controllers/Weather')
router.route('/').get(getWeather).post(AddaWeather)
router.route('/:cityname').get(getCity,getWeather)
module.exports=router