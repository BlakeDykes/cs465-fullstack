const express = require('express');
const router = express.Router();
const controller = require('../controllers/rooms');

/*Get Rooms Page*/
router.get('/', controller.rooms);

module.exports = router;