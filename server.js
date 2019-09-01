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
  
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/api', (req, res) => {
    res.json([
        {title: 'listing 1'},
        {title: 'listing 2'},
        {title: 'listing 3'},
        {title: 'listing 4'},
    ])
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(PORT, () => console.log(`: : : : : : : : SERVER LISTENING ON PORT ${PORT} : : : : : : : :`))