import React, {useState, useEffect} from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchText, setSearchText] = useState('')

    const hook = () => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }

    useEffect(hook, [])

    const addNewPerson = (event) => {
        event.preventDefault()

        const nameAlreadyAdded = persons.find(person => person.name === newName);
        if (nameAlreadyAdded !== undefined) {
            window.alert(`${newName} is already added to phonebook`)
            return
        }

        const newPerson = {
            name: newName,
            number: newNumber,
            id: persons.length
        }

        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
    };

    const newNameChange = (event) => {
        setNewName(event.target.value)
    }

    const newNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const newSearch = (event) => {
        setSearchText(event.target.value);
    }
/*
CZY NIE ZAPOMNIALEM DODAC KEY????
 */
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter searchText={searchText}
                    newSearch={newSearch}
            />
            <h2>add a number</h2>
            <PersonForm addNewPerson={addNewPerson}
                        newName={newName}
                        newNameChange={newNameChange}
                        newNumber={newNumber}
                        newNumberChange={newNumberChange}
            />
            <h2>Numbers</h2>
            <Persons persons={persons}
                     searchText={searchText}
            />
        </div>
    )
}

export default App