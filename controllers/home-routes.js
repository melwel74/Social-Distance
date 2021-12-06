const router = require('express').Router();

router.get('/', (req,res)=>{
    res.render('Social Distance');
});

module.exports = router;