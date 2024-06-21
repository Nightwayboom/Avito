const router = require('express').Router()
const { where } = require('sequelize')
const { Favorite, Property } = require('../../db/models')
const verifyAccessToken = require('../../middleware/verifyAccesToken')

router.get('/', verifyAccessToken, async (req, res) => {
	try {
		const favorites = await Favorite.findAll({
			where: { userId: res.locals.user.id },
			include: Property,
		})
		res.status(200).json({ message: 'success', favorites })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.get('/:propertyCategoryId', async (req, res) => {
	try {
		const { propertyCategoryId } = req.params
		const findPropertyCategoryId = await Favorite.findOne({
			where: { id: propertyCategoryId },
		})
		res.status(200).json({ message: 'success', findPropertyCategoryId })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.delete('/:favoriteId', verifyAccessToken, async (req, res) => {
	try {
		const { favoriteId } = req.params
		const deleteFavorite = await Favorite.destroy({
			where: { propertyId: favoriteId, userId: res.locals.user.id },
		})
		if (deleteFavorite > 0) {
			res.status(200).json({ message: 'success' })
			return
		}
		res.status(400).json({ message: 'НЕА' })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.post('/', verifyAccessToken, async (req, res) => {
	try {
		const { propertyId } = req.body
		const newProperties = await Favorite.create({
			userId: res.locals.user.id,
			propertyId,
		})
		if (newProperties) {
			const property = await Favorite.findOne({
				where: { id: newProperties.id },
				include: Property,
			})
			res.status(201).json({ message: 'success', property })
			return
		}
		res.status(400).json({ message: 'НЕА' })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

module.exports = router
