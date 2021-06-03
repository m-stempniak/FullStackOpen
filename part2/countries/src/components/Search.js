import React from "react";

const Search = ({searchText, newSearch}) => {
    return (
        <div>
            find countries: <input
            value={searchText}
            onChange={newSearch}
        />
        </div>
    )
}

export default Search