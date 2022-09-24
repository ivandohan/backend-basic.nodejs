const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')

const {homeStartingContent, aboutContent, contactContent, posts} = require('./data')
const { identity, isBuffer } = require('lodash')


const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.listen(3000, () => {
    console.log("Server is running on port 3000....")
})

app.get('/', (req, res) => {
    res.render('home', {
        startingContent: homeStartingContent,
        myPosts: posts,
    })
})

app.get('/about', (req, res) => {
    res.render('about', {about: aboutContent})
})

app.get('/contact', (req, res) => {
    res.render('contact', {contact: contactContent})
})

app.get('/compose', (req, res) => {
    res.render('compose')
})

app.post('/compose', (req, res) => {
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody,
    }

    posts.push(post)

    res.redirect('/')
})

app.get('/posts/:postName', (req, res) => {
    const requestedTitle = _.lowerCase(req.params.postName)
    let isFound = false

    posts.forEach((post) => {
        if(_.lowerCase(post.title) == requestedTitle) {
            isFound = true
            res.render('post', {
                title: post.title,
                content: post.content,
            })
        }
    })

    if(!isFound) {
        res.redirect('/')
    }
})


