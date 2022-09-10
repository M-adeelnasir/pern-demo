
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

    return <ResturentContext.Provider value={{ resturents, setResturents, fetchData }}>
        {props.children}
    </ResturentContext.Provider>
}