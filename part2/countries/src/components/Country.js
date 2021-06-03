import React from "react";

const Weather = ({weatherData}) => {
    if (weatherData.length !== 0 && !weatherData.error) {
        return (
            <div>
                <div><b>temperature:</b> {weatherData.current.temperature} Celsius</div>
                <div>
                    <img src={weatherData.current.weather_icons[0]} alt="weather_image" style={{width: "100px"}}/>
                </div>
                <div><b>wind:</b> {weatherData.current.wind_speed} direction: {weatherData.current.wind_dir}</div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

const Country = ({country, weatherData}) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <div>capital: {country.capital}</div>
            <div>population: {country.population}</div>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)}
            </ul>
            <div>
                <img src={country.flag} alt="flag" style={{width: "200px"}}/>
            </div>
            <h3>Weather in {country.capital}</h3>
            <Weather weatherData={weatherData}/>
        </div>
    )
}

export default Country;