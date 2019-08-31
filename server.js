const express = require('express')
const path = require('path')

require('dotenv').config()

const PORT = process.env.PORT || 8080
const app = express();

//CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

app.get('/api', (req, res) => {
    res.json({data: 'OK'})
})

// app.use('/', (req, res) => {
//     res.send('WORKING')
// })

app.use(() => {
    express.static(path.join(__dirname, 'client', 'build'))
    console.log('app use endpoint working')
})

app.listen(PORT, () => console.log(`: : : : : : : : SERVER LISTENING ON PORT ${PORT} : : : : : : : :`))