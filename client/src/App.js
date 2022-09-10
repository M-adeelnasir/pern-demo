import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { ResturentContext } from './context/resturent'



const App = () => {
  const { resturents, setResturents } = useContext(ResturentContext)


  const fetchData = async () => {
    try {
      const data = await axios.get('http://localhost:4000/api/v1/restuarents')

      setResturents(data.data.data)
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>{JSON.stringify(resturents)}</div>
  )
}

export default App