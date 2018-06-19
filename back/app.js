const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./db')
const app = express()

app.use(bodyParser.json())

// Partie "R" de CRUD => Read all markers
app.get('/api/markers', (req, res) => {
  connection.query('SELECT * FROM markers', function (error, results) {
    if (error) {
      return res.status(500).json({
        error: error.message
      })
    }
    res.json(results)
  })
})

app.listen(5000)
