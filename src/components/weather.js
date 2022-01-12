import React from "react";
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from "moment";

const WeatherCard = ({ weatherData }) => (
    <div className='ui centered card'>
        <Card className="card">
            <Card.Content className="card-content">
                <Card.Header className="header">
                    {weatherData.name}
                </Card.Header>
                <p className="date">{moment().format('dddd')}, {moment().format('LL')}</p>
                <p>Temperature: {weatherData.main.temp} &deg;F </p>
                <p>Feels Like: {weatherData.main.feels_like} &deg;F</p>
                <p>Min: {weatherData.main.temp_min} &deg;F / Max: {weatherData.main.temp_max} &deg;F</p>
                <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</p>
                <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</p>
                <p>Description: {weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
            </Card.Content>
        </Card>
    </div>

)

export default WeatherCard;