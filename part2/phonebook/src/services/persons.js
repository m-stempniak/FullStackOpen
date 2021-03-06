import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const update = updatedPerson => {
    const request = axios.put(`${baseUrl}/${updatedPerson.id}`, updatedPerson)
    return request.then(response => response.data)
}

const deleteEntry = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const service = { getAll, create, deleteEntry, update }

export default service