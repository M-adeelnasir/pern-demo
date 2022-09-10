import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { ResturentContext } from './context/resturent'



const App = () => {
  const { resturents, setResturents, fetchData } = useContext(ResturentContext)


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>{JSON.stringify(resturents)}</div>
  )
}

export default App