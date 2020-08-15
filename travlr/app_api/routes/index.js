const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

router
    .route('/rooms')
    .get(roomsController.roomList);

router
    .route('/rooms/:roomCode')
    .get(roomsController.roomFindByCode);

    module.exports = router;