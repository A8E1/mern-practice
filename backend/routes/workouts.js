//utilizes express package
const express = require('express')

//creates a router object
const router = express.Router()


//ROUTES--

//GET all workouts
router.get('/', (req, res)=>{
    res.json({message: "GET all workouts"})
})

//GET single workout
router.get('/:id', (req, res) => {
    res.json({message: "GET single workout"})
})

//CREATE a workout
router.post("/", (req, res) => {
    res.json({message: "CREATE a workout"})
})


//DELETE a workout
router.delete("/:id", (req, res) => {
    res.json({message: "DELETE a workout"})
})

//UPDATE a workout
router.patch("/:id", (res, req) => {
    res.json({message: "UPDATE a workout"})
})


//allows us to use router outside of workouts.js
module.exports() = router