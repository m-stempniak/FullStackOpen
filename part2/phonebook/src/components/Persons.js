import React from "react";

const Person = ({person, deleteHandler}) => {
    return (
        <div>{person.name} {person.number} <button onClick={deleteHandler}>delete</button></div>
    )
}

const Persons = ({persons, searchText, deletePerson}) => {
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().startsWith(searchText.toLowerCase()))
                .map(person =>
                    <Person person={person} key={person.id} deleteHandler={() => deletePerson(person)}/>
                )}
        </div>
    )
}

export default Persons