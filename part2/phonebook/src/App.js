import React, {useState, useEffect} from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from "./services/persons";
import personsService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchText, setSearchText] = useState('')
    const [notificationMessage, setNotificationMessage] = useState(null)
    const [isError, setIsError] = useState(false)

    const hook = () => {
        personService
            .getAll()
            .then(allPersons => setPersons(allPersons))
    }

    useEffect(hook, [])

    const addNewPerson = (event) => {
        event.preventDefault()

        const existingPerson = persons.find(person => person.name === newName);
        if (existingPerson !== undefined) {
            const shouldAdd = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            if (!shouldAdd) {
                setNewName('')
                setNewNumber('')
                return
            }

            const updatedPerson = {
                ...existingPerson,
                number: newNumber
            }

            personService.update(updatedPerson).then(updatedPerson => {
                setPersons(persons.map(per => per.id === updatedPerson.id ? updatedPerson : per))
                setNewName('')
                setNewNumber('')
                setNotification(`Added ${updatedPerson.name}`, false)
            })
        } else {
            const newPerson = {
                name: newName,
                number: newNumber
            }

            personService.create(newPerson).then(createdPerson => {
                setPersons(persons.concat(createdPerson))
                setNewName('')
                setNewNumber('')
                setNotification(`Added ${createdPerson.name}`, false)
            })
        }
    };

    const deletePerson = person => {
        const shouldBeDeleted = window.confirm(`Delete ${person.name}?`)
        if (shouldBeDeleted) {
            personsService.deleteEntry(person.id).then(() => {
                setPersons(persons.filter(p => p.id !== person.id))
            }).catch(error => {
                setNotification(`${person.name} has already been removed from server`, true)
                setPersons(persons.filter(p => p.id !== person.id))
            })
        }
    }

    const setNotification = (message, isError) => {
        setIsError(isError)
        setNotificationMessage(message)
        setTimeout(() => {setNotificationMessage(null)}, 2000)
    }

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
            <Notification message={notificationMessage} isError={isError}/>
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
                     deletePerson={deletePerson}
            />
        </div>
    )
}

export default App