//utilizes the dotenv package, adds the vars in .env to process obj
require('dotenv').config()

//utilizes the express package 
const express = require('express')

//creates the express application
const app = express()

//middleware
app.use((req,res,next)=>{
    console.log(req.method, req.path)
    //necessary line in order to go to the next piece of middleware
    next()
    //w/o next() line, it won't go to the responding method 
})


//react to requests aka routes, considered a form of middleware
app.get('/', (req, res) => {
    res.json({
        message: "mama we made it"
    })

    //response object returned automatically
    //.json() = takes in a js obj, returns in json
})


//used to listen to requests to the server
app.listen(process.env.PORT, ()=>{
    console.log("terry")
})

