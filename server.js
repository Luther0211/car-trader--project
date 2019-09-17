const express = require('express')
const path = require('path')
const Axios = require('axios')

require('dotenv').config()

const API_KEY = process.env.API_KEY
const PORT = process.env.PORT || 8080
const app = express();

const API = Axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Host': 'marketcheck-prod.apigee.net',
        'Content-Type': 'application/json'
    }
});

//CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
  
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/api/search', (req, res) => {
    console.log(req.url)
    const urlParams = req.url.replace('/api/search?', '')
    const fetchURL = `/search?api_key=${API_KEY}&${urlParams}`

    API.get(fetchURL)
        .then(result => {
            // console.log(result)
            res.status(result.status).json({result: result.data})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err: {msg: 'Internal Server Error', err: err} })
        })
})

app.get('/api/listing/:listingId', (req, res) => {
    const listingId = req.params.listingId
    console.log(listingId)

    API.get(`/listing/${listingId}?api_key=${API_KEY}`)
        .then(result => {
            res.status(result.status).json(result.data)
        })

})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(PORT, () => console.log(`: : : : : : : : SERVER LISTENING ON PORT ${PORT} : : : : : : : :`))