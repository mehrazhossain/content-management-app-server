const express = require('express')
const app = express()
const cors = require('cors')

// middleware
app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
    res.send('Route is working!')
})


module.exports = app;