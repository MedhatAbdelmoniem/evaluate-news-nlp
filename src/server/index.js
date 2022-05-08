var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)


var resp = {
    application_key: "5d09f8c89e9d9682d9caa164f010dad7"
}


app.get('/res', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*')
    res.send(resp)
})

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

