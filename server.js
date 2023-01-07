// import modules

import express from 'express'
import { tricks } from './data/tricks-data.js'


// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res){
  res.send('<h1> HIIIII </h1>')
})

app.get('/home', function(req, res){
  res.render('home')
})

app.get('/tricks', function(req, res){
  res.render('tricks/index',{
    tricks: tricks
  })
})
// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})