const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes=require('./api/');
router.get('/api/social-distance', (req,res) =>{
    res.send('social-distance');
})
router.use('/', homeRoutes);
router.use('/api', apiRoutes)

module.exports = router