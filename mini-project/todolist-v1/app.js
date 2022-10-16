const express = require('express')
const bodyParser = require('body-parser')
const {getDate, getList, setList} = require('./functions')


// Greening

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(3000, () => {
    console.log("Running on port 3000...")
})

app.get('/', (req, res) => {
    res.render('list', {listItem: getList(), dayFormatted: getDate()})
})

app.post('/', (req, res) => {
    
    setList(req.body.newList)

    res.redirect('/')
})