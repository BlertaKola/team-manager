const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String },
    position: { type: String },
    game1: { 
        type: String,
        default: "undecided"
    },
    game2: {
        type: String,
        default: "undecided"
    },
    game3: {
        type: String,
        default: "undecided"
    }
}, { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);