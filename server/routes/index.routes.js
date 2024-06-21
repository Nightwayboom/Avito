const router = require('express').Router();

const authRoutes = require('./api/auth.routes');
const propertyRoutes = require('./api/property.routes');
const propertyCategotyRoutes = require('./api/propertyCategory.routes');
const tokensRoutes = require('./api/tokens.routes');
const favoriteRoutes = require('./api/favorite.routes');

router.use('/property', propertyRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/propertyCategory', propertyCategotyRoutes);
router.use('/auth', authRoutes);
router.use('/tokens', tokensRoutes);

module.exports = router;
