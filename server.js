const express = require('express')
const path = require('path')

require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express();


app.get('/api', (req, res) => {
    res.json({TEST: 'OK'})
})

app.use(() => {
    express.static(path.join(__dirname, 'client', 'build'))
    console.log('app use endpoint working')
})

app.listen(PORT, () => console.log(`: : : : : : : : SERVER LISTENING ON PORT ${PORT} : : : : : : : :`))