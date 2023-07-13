const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Bulkemail.html'))
})
app.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, 'settings.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})