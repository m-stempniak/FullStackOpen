import React from "react";

const PersonForm = (props) => {
    return (
        <form onSubmit={props.addNewPerson}>
            <div>
                name: <input
                value={props.newName}
                onChange={props.newNameChange}
            />
            </div>
            <div>
                number: <input
                value={props.newNumber}
                onChange={props.newNumberChange}
            />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm