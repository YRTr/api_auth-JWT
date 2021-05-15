const router = require('express').Router();
const verify = require('./verifytoken');

router.get('/', verify, (req, res) => [
    res.json({
        posts: {
            title: 'my first post',
            description: 'randow data you have no access!'
        }
    })
])

module.exports = router;