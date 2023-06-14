const WeatherModel=require('../Models/Weather')
const getWeather = async(request,response)=>
{
    // response.send("displaying weather")
    try{
            const weather=await WeatherModel.find();
            response.status(200).json(weather);
        }
        catch(error){
            response.status(500).json({message:error.message})
        }
 }
const AddaWeather =async(request,response)=>
{
    //response.send("Adding a weather")
    //response.json(request.body)
    const newweather=new WeatherModel({
                cityname:request.body.cityname ,
                cityTemperature:request.body.cityTemperature,
                WeatherCondition:request.body.WeatherCondition,
                Date:request.body.Date
            })
            try{
                const weather=await newweather.save();
                response.status(201).json(weather);
            }
            catch(error){
                response.status(500).json({message:error.message})
            }
}
async function getCity(request,response,next){
    let CityName
    try{
        CityName= await WeatherModel.findOne(request.params.name)
      if(CityName==null){
           return  response.status(404).json({message:`Cannot find the city ${request.params.cityname}`})

        }
    }
    catch(error){
return response.status(500).json({message:error.message})
    }
    response.cityname=CityName;
    next()
}
module.exports={getWeather,AddaWeather,getCity}