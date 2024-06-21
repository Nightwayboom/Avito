const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const { where } = require('sequelize')
const { Property } = require('../../db/models')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '..', '/..', 'public/img'))
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Math.round(Math.random() * 1e9)
		cb(null, file.originalname)
		// cb(null,uniqueSuffix + '-' + file.originalname)
	},
})

const upload = multer({ storage })

router.get('/', async (req, res) => {
	try {
		const allProperties = await Property.findAll({ where: req.query })
		res.status(200).json({ message: 'success', allProperties })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.get('/:propertyId', async (req, res) => {
	try {
		const { propertyId } = req.params
		const property = await Property.findOne({ where: { id: propertyId } })
		res.status(200).json({ message: 'success', property })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.post('/', upload.single('photo'), async (req, res) => {
	try {
		const { propertyCategoryId, title, price, description } = req.body
    const {filename} = req.file
    console.log(filename);
		const newProperties = await Property.create({
			propertyCategoryId,
			title,
			price,
			description,
			photo : `img/${filename}`,
		})
		if (newProperties) {
			res.status(201).json({ message: 'success', newProperties })
			return
		}
		res.status(400).json({ message: 'НЕА' })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.put('/:propertyId', async (req, res) => {
	try {
		const { propertyId } = req.params
		const { propertyCategoryId, title, price, description, photo } = req.body
		const updateProperty = await Property.create(
			{
				propertyCategoryId,
				title,
				price,
				description,
				photo,
			},
			{ where: { id: propertyId } }
		)
		if (updateProperty[0] > 0) {
			res.status(200).json({ message: 'success', updateProperty })
			return
		}
		res.status(400).json({ message: 'НЕА' })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.delete('/:propertyId', async (req, res) => {
	try {
		const { propertyId } = req.params
		const deleteProperty = await Property.destroy({
			where: { id: propertyId },
		})
		if (deleteProperty > 0) {
			res.status(200).json({ message: 'success', deleteProperty })
			return
		}
		res.status(400).json({ message: 'НЕА' })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

module.exports = router
