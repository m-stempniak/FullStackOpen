import React, {useState, useEffect} from "react";
import axios from "axios";
import Search from "./components/Search";
import Countries from "./components/Countries";
import Country from "./components/Country";

const App = () => {
    const WEATHER_API_KEY = process.env.REACT_APP_API_KEY
    const [searchText, setSearchText] = useState('')
    const [countries, setCountries] = useState([])
    const [weatherData, setWeatherData] = useState([])

    const hook = () => {
        if (!searchText) {
            setCountries([])
        } else {
            axios
                .get(`https://restcountries.eu/rest/v2/name/${searchText}`)
                .then(response => {
                    setCountries(response.data)
                })
        }
    }

    const weatherHook = () => {
        if (countries.length === 1) {
            axios
                .get(`http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${countries[0].capital}`)
                .then(response => {
                    setWeatherData(response.data)
                })
        }
    }

    useEffect(hook, [searchText]);
    useEffect(weatherHook, [countries, WEATHER_API_KEY]);

    const newSearch = (event) => {
        setSearchText(event.target.value)
    }

    const selectCountry = (event) => {
        setSearchText(event.target.dataset.name)
    }

    const displaySearchResults = () => {
        const resultsLength = countries.length

        if (resultsLength === 0) {
            return (<></>)
        } else if (resultsLength === 1) {
            return (<Country country={countries[0]} weatherData={weatherData}/>)
        } else if (resultsLength <= 10) {
            return (<Countries countries={countries} selectCountry={selectCountry}/>)
        } else {
            return (<div>Too many matches, specify another filter</div>)
        }
    }

    return (
        <div>
            <Search searchText={searchText} newSearch={newSearch}/>
            {displaySearchResults()}
        </div>
    )
}

export default App;
