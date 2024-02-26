const Player = require('../models/player.model');   

module.exports.createPlayer = (request, response) => {
    Player.create(request.body)
        .then(res => response.json(res))
        .catch(err => response.json(err))
}

module.exports.getAllPlayers = (request, response) => {
    Player.find()
        .then(allplayers => response.json(allplayers))
        .catch(err => response.json(err))
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({_id: request.params.id})
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

// module.exports.updatePlayer = (request, response) => {

//     Player.findOne({_id:request.params.id})
//     .then(player => {
//         player.game1 = request.body.game1
//         player.save()
//         response.json(player)
//     })
//     .catch(err => response.json(err))
// }

module.exports.updatePlayer = (request, response) => {
    Player.findOne({ _id: request.params.id })
        .then(player => {
            if ('game1' in request.body || 'game2' in request.body || 'game3' in request.body) {
                if ('game1' in request.body) {
                    player.game1 = request.body.game1;
                }
                if ('game2' in request.body) {
                    player.game2 = request.body.game2;
                }
                if ('game3' in request.body) {
                    player.game3 = request.body.game3;
                }

                player.save()
                    .then(savedPlayer => {
                        response.json(savedPlayer);
                    })
                    .catch(saveErr => {
                        response.status(500).json({ error: saveErr.message });
                    });
            } else {
                response.status(400).json({ error: 'Invalid request body. Please provide at least one of game1, game2, or game3.' });
            }
        })
        .catch(err => response.status(404).json({ error: 'Player not found.' }));
};