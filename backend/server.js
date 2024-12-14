//utilizes the dotenv package, adds the vars in .env to process obj
require('dotenv').config()

//utilizes the express package 
const express = require('express')

//creates the express application
const app = express()

//pulls in router for all workout requests
const workoutRouter = require('./routes/workouts')


//middleware
app.use((req,res,next)=>{
    console.log(req.method, req.path)
    //necessary line in order to go to the next piece of middleware
    next()
    //w/o next() line, it won't go to the responding method 
})


//react to requests aka routes, considered a form of middleware

//routes the /api/workouts/ to the workoutRouter routes
//ex: user goes to /api/workouts/create
//router.post('create') will be in workouts.js
app.use('/api/workouts', workoutRouter)

//REPLACED BY WORKOUT ROUTER
// app.get('/', (req, res) => {
//     res.json({
//         message: "mama we made it"
//     })

//     //response object returned automatically
//     //.json() = takes in a js obj, returns in json
// })


//used to listen to requests to the server
app.listen(process.env.PORT, ()=>{
    console.log("terry")
})

