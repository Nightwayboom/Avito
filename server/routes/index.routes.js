const router = require('express').Router();

const authRoutes = require('./api/auth.routes');
const propertyRoutes = require('./api/property.routes');
const propertyCategotyRoutes = require('./api/propertyCategory.routes');
const tokensRoutes = require('./api/tokens.routes');

router.use('/property', propertyRoutes);
router.use('/propertyCategoty', propertyCategotyRoutes);
router.use('/auth', authRoutes);
router.use('/tokens', tokensRoutes);

module.exports = router;
