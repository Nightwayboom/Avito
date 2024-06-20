const router = require('express').Router()
const { where } = require('sequelize')
const {PropertyCategory} = require('../../db/models')


router.get('/',async(req,res)=> {
    try {
        const allPropertyCategorys = await PropertyCategory.findAll()
        res.status(200).json({message:'success',allPropertyCategorys})
    } catch ({message}) {
        res.status(500).json({error: message})
    }
})

router.get('/:propertyCategoryId',async(req,res)=> {
    try {
        const {propertyCategoryId} = req.params
        const findPropertyCategoryId = await PropertyCategory.findOne({where:{id: propertyCategoryId}})
        res.status(200).json({message: 'succes',findPropertyCategoryId})
    } catch ({message}) {
        res.status(500).json({error: message})
    }
})


module.exports = router