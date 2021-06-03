import React from "react";

const Countries = ({countries, selectCountry}) => {
    return (
        <div>
            {countries.map(country =>
                <div key={country.alpha3Code}>
                    {country.name} <button onClick={selectCountry} data-name={country.name}>show</button>
                </div>
            )}
        </div>
    )
}

export default Countries