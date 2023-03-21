const express = require('express');
const router = express.Router();
const products = require('../controllers/productsController');

router.get('/show', products.findAll);
router.post('/add', products.addScooter);
router.get('/show/:id', products.findScooter); //get by id
router.put('/update/:id', products.updateScooter);
router.delete('/remove/:id', products.deleteScooter);

module.exports = router;
