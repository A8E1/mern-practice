//utilizes the express package 
const express = require('express')

//creates the express application
const app = express()

//react to requests aka routes
app.get('/', (req, res) => {
    res.json({
        message: "mama we made it"
    })

    //response object returned automatically
    //.json() = takes in a js obj, returns in json
})


//used to listen to requests to the server
app.listen(4000, ()=>{
    console.log("terry")
})