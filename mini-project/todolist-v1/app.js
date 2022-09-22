const express = require('express')
const bodyParser = require('body-parser')
const toTitleCase = require('./functions')

const options = {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'long'
}
let day = new Date().toLocaleDateString("id-ID", options)

let list = ['Workout', 'Web Dev']

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log("Running on port 3000...")
})

app.get('/', (req, res) => {

    res.render('list', {listItem: list, dayFormatted: day})
})

app.post('/', (req, res) => {
    let newList = req.body.newList
    list.push(toTitleCase(newList))
    
    res.render('list', {listItem: list, dayFormatted: day})
})