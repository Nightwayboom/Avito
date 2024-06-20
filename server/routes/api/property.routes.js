const router = require('express').Router()
const Properties = require('../../db/models/property')

router.get('/', async (req,res) => {
    try {
        const allProperties = await Properties.findAll()
        res.status(200).json({message: 'success', allProperties})
    } catch ({message}) {
        res.status(500).json({error: message})
    }
})






module.exports = router