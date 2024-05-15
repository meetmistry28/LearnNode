const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.send("Category Get")    
})

router.post('/',(req,res) => {
    res.send("Category Post")    
})

router.delete('/',(req,res) => {
    res.send("Category Delete")    
})

router.put('/',(req,res) => {
    res.send("Category Put")    
})

module.exports = router
