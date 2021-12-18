const router = require('express').Router();
const {User} = require('../../models')

router.post('/sign-up',(req, res)=>{
    User.create({
        author_id:2,
        name:'mark',
        user_name: 'solar',
        pw:'seven',
    })
})
module.exports = router;

