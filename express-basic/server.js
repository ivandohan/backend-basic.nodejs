const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000, () => {
    console.log("Server started on port 3000...")
})

app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center; font-size: 6rem;">Hello Sekai!</h1>')
})

app.get('/calculator', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/calculator', (req, res) => {
    let result = Number(req.body.num1) + Number(req.body.num2)
    res.send(`<h1 style="text-align: center; font-size: 6rem;">Thank you!</h1><br><h2 style="text-align: center; font-size: 4rem;">Result : ${result}</h2>`)

    setTimeout(() => {
        res.sendFile(__dirname + "/index.html")
    }, 3000)
})