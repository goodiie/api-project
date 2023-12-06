const express = require('express');
const router = express.Router();
const items = require('..//controllers/itemController')

router.get('/allItems', items.getAllItems);
router.get('/items/:id', items.getSingleItem);
router.post('/createItem', items.addNewItem);
router.put('/updateItem/:id', items.updateItem);
router.delete('/deleteItem/:id', items.deleteItem);

module.exports = router;