const fs = require('fs');

const roomList = JSON.parse(fs.readFileSync('./data/rooms.json','utf8'));

/*Get Rooms View */
const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Getaways', roomList});
};

module.exports = {
    rooms
};