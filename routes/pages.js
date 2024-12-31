const express = require('express');

const {indexPage, sagaIndexPage, sagaInfoPage, cartPage} = require('../controller/pagesCtrl');

const router = express.Router();

router.get('/', indexPage);
router.get('/saga-index', sagaIndexPage);
router.get('/saga-info', sagaInfoPage);
router.get('/cart', cartPage);

module.exports = router;