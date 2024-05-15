const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send("classes Get")
})


router.post('/', (req,res) => {
    res.send("classes post")
})


router.delete('/', (req,res) => {
    res.send("classes delete")
})


router.put('/', (req,res) => {
    res.send("classes put")
})

module.exports = router
