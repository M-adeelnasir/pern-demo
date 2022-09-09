const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const db = require('./db/connectionDB')
require('dotenv').config()


const app = express()

const { query } = db

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5000


app.get('/health-check', async (req, res) => {
    res.sendStatus(200)
})


app.get('/api/v1/restuarents', async (req, res) => {
    try {
        const { rows } = await query('SELECT * FROM restuarents')
        res.status(200).json({
            success: true,
            data: rows
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "SERVER ERROR"
        })
    }
})


app.get('/api/v1/restuarent/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await query(`SELECT * FROM restuarents WHERE id = ${id}`)
        res.status(200).json({
            success: true,
            data: rows
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "SERVER ERROR"
        })
    }
})





app.listen(PORT, () => {
    console.log("Server os listening at port 1337");
})