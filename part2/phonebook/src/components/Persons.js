import React from "react";

const Person = ({person}) => {
    return (
        <div>{person.name} {person.number}</div>
    )
}

const Persons = ({persons, searchText}) => {
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().startsWith(searchText.toLowerCase()))
                .map(person =>
                    <Person person={person} key={person.id}/>
                )}
        </div>
    )
}

export default Persons