const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')


const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.listen(3000, () => {
    console.log("Server is running on port 3000....")
})

app.get('/', (req, res) => {
    res.write('<h1>Homee</h1>')
    res.send()
})
