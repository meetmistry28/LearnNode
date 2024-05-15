const express = require('express')
const router = express.Router()

const classessRouter = require('./classes')
const categoryRouter = require('./categorys')

router.use('/classes',classessRouter)
router.use('/categorys',categoryRouter)

module.exports = router
