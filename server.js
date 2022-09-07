const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 1337


app.listen(PORT, () => {
    console.log("Server os listening at port 1337");
})