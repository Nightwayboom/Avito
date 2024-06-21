const router = require('express').Router()
const { where } = require('sequelize')
const { Favorite, Property } = require('../../db/models')
const verifyAccessToken = require('../../middleware/verifyAccesToken')

router.get('/',  async (req, res) => {
	try {
		const favorites = await Favorite.findAll({
			// where: { userId: res.locals.user.id },
			where: { userId: 1 },
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
		res.status(200).json({ message: 'succes', findPropertyCategoryId })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

module.exports = router
