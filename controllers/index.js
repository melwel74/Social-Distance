const router = require('express').Router();
const homeRoutes = require('./home-routes');
router.get('/api/social-distance', (req,res) =>{
    res.send('social-distance');
})
router.use('/', homeRoutes);

module.exports = router