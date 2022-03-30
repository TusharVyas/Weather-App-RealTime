import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherInfoComponent from "./components/WeatherInfoComponent";
const API_key="3a846cd2ce02cee48386cdf10e9adabc";
const Container=styled.div`
  display: flex;
  flex-direction:column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 10px 20px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
`;
const AppLabel=styled.a`
  
`;
function App() {
  const [city , updateCity]=useState();
  const [weather , updateWeather]=useState();
  const fetchWeather=async(e)=>{
    e.preventDefault();
    const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
    updateWeather(response.data);
  }
  return (
    <Container>
      <AppLabel href="/" className="btn btn-primary">Weather App</AppLabel>
      {weather?<WeatherInfoComponent weather={weather} />:<CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>}
    </Container>
  );
}

export default App;
