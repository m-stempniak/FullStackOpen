import React from "react";

const Filter = (props) => {
    return (
        <div>
            filter shown with: <input
            value={props.searchText}
            onChange={props.newSearch}
        />
        </div>
    )
}

export default Filter