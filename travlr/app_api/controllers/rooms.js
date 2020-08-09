const mongoose = require('mongoose');
const model = mongoose.model('rooms');

//GET: /rooms - lists all the rooms
const roomList = async(req, res) => {
    model
        .find({}) //empty filter for all
        .exec((err, rooms) => {
            if(!rooms){
                return res
                    .status(404)
                    .json({"message": "room not found"});
            } else if (err) {
                status(404)
                .json(err);
            } else {
                return res
                    .status(200)
                    .json(room);

            }
    });
};

const roomFindByCode = async(req, res) => {
    model
        .find({'code': req.params.roomCode})
        .exec((err, room) => {
            if(!room){
                return res
                    .status(404)
                    .json({"message": "trip not found"});
            } else if(err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(room);
            }
        });
};

module.exports = {
    roomList,
    roomFindByCode
}