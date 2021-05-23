import React, {useState} from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 0},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 1},
        {name: 'Dan Abramov', number: '12-43-234345', id: 2},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 3}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchText, setSearchText] = useState('')

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