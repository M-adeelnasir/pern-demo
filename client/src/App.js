import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { ResturentContext } from './context/resturent'



const App = () => {
  const { resturents, setResturents, fetchData, addResturents } = useContext(ResturentContext)
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [price_range, setPrice_range] = useState('')

  useEffect(() => {
    fetchData()
  }, [])



  const handleSubmite = async (e) => {
    e.preventDefault()
    addResturents(name, location, price_range)
  }



  return (
    <div>
      <p>
        {JSON.stringify(resturents)}
      </p>

      <form onSubmit={handleSubmite}>
        <input type="text" value={name} placeholder="eneter name" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={location} placeholder="eneter name" onChange={(e) => setLocation(e.target.value)} />
        <input type="text" value={price_range} placeholder="eneter name" onChange={(e) => setPrice_range(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default App