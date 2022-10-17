const express = require('express')
const bodyParser = require('body-parser')
const toTitleCase = require('./functions')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

const options = {
    weekday: 'long',
    years: 'numeric',
    day: 'numeric',
    month: 'long',
}

const day = new Date().toLocaleDateString('id-ID', options)

let list = ['Workout', 'Web Dev']

app.listen(3000, () => {
    console.log('Server is running on port 3000...')
})

app.get('/', (req, res) => {
    res.render('list', {dayFormatted: day, listItem: list})
})

app.post('/', (req, res) => {
    let newItemList = toTitleCase(req.body.newList)
    list.push(newItemList)
    res.render('list', {dayFormatted: day, listItem: list})
})


