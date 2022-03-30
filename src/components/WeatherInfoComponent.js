import styled from "styled-components";
export const WeatherInfoIcons={
    sunrise: "icons/temp.svg",
    sunset: "icons/temp.svg",
    humidity: "icons/humidity.svg",
    wind: "icons/wind.svg",
    pressure: "icons/pressure.svg",

}
export const WeatherIcons = {
    "01d":"icons/sunny.svg",
    "01n":"icons/night.svg",
    "02d":"icons/day.svg",
    "02n":"icons/cloudy-night.svg",
    "03d":"icons/cloudy.svg",
    "03n":"icons/cloudy.svg",
    "04d":"icons/perfect-day.svg",
    "04n":"icons/cloudy-night.svg",
    "09d":"icons/rain.svg",
    "09n":"icons/rain-night.svg",
    "10d":"icons/rain.svg",
    "10n":"icons/rain-night.svg",
    "11d":"icons/storm.svg",
    "11n":"icons/storm.svg",
    "50d":"icons/50d@2x.png",
    "50n":"icons/50d@2x.png"
}
const WeatheerCondition=styled.div`
display:flex;
flex-direction:row;
align-items:center;
width: 100%;
justify-content: space-between;
margin: 30px auto;
`
const Condition=styled.span`
margin: 20px;
font-size: 14px;
& span{
    font-size: 28px;

}
`;
const WeatherIcon=styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
`
const Location=styled.span`
font-size: 28px;
font-weight: bold;
`
const WeatherDetails=styled.span`
font-size: 14px;
font-weight: bold;
margin: 20px auto;
text-align: start;
width: 90%;
`
const WeatherInfoContainer=styled.div`
display: flex;
width: 90%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
const WeatherInfo=(props)=>{
    const {name, value} = props;
    return(
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
            {value}
            <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}
const WeatherInfoComponent=(props)=>{
    const {weather}=props;
    const isday=weather?.weather[0].icon?.includes('d');
    const getTime=(timeStamp)=>{
        return `${new Date(timeStamp * 1000).getHours()}: ${new Date(timeStamp*1000).getMinutes()}`;
    };
    return<>
    <WeatheerCondition>
        <Condition><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{`| ${weather?.weather[0].description}`}</Condition>
        <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]}></WeatherIcon>
    </WeatheerCondition>
    <Location>{`${weather?.name},${weather?.sys?.country}`}</Location>
    <WeatherDetails>Weather Details</WeatherDetails>
    <WeatherInfoContainer>
        <WeatherInfo name={isday?"sunset":"sunrise"} value={getTime(weather?.sys[isday?"sunset":"sunrise"])}/>
        <WeatherInfo name="humidity" value={weather?.main?.humidity}/>
        <WeatherInfo name="wind" value={weather?.wind?.speed}/>
        <WeatherInfo name="pressure" value={weather?.main?.pressure}/>
    </WeatherInfoContainer>
    </>
}
export default WeatherInfoComponent;