import * as express from 'express';

var router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).json({status:1, message: 'API is Working'});
});

export = router;