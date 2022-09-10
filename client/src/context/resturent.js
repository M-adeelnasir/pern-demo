
import { useState, createContext } from 'react'
import axios from 'axios'
export const ResturentContext = createContext()

export const ResturentProvider = (props) => {

    const [resturents, setResturents] = useState([])

    const fetchData = async () => {
        try {
            const data = await axios.get('http://localhost:4000/api/v1/restuarents')

            setResturents(data.data.data)
        } catch (err) {
            console.log(err);
        }
    }


    const addResturents = async (name, location, price_range) => {
        try {
            const data = await axios.post('http://localhost:4000/api/v1/restuarent/create', { name, location, price_range })

            setResturents([...resturents, data.data.data])
        } catch (err) {
            console.log(err);
        }
    }

    return <ResturentContext.Provider value={{ resturents, setResturents, fetchData, addResturents }}>
        {props.children}
    </ResturentContext.Provider>
}