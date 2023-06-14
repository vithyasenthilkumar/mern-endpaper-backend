const mongoose=require('mongoose');
const WeatherSchema=new mongoose.Schema({
    cityname:{
        type:String,
        required:true
    },
    cityTemperature:{
        type:String,
        required:true
    },
    
    WeatherCondition:{
        type:String,
        required:true
    },
    Date:
    {
        type:Date,
        default:Date.now
    },
    
    // WeatherConditionImage:
    // {
    //     type:String,
    //     required:true
    // }
});
module.exports=mongoose.model('WeatherModel',WeatherSchema)
