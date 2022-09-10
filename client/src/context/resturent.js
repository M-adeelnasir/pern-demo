
import { useState, createContext } from 'react'

export const ResturentContext = createContext()

export const ResturentProvider = (props) => {

    const [resturents, setResturents] = useState([])


    return <ResturentContext.Provider value={{ resturents, setResturents }}>
        {props.children}
    </ResturentContext.Provider>
}