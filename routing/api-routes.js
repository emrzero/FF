
var data = require('../data/friends.js');

module.exports = function(app) {

    app.post('/api/friends', function (req, res) {
            var newUser = req.body;
            console.log(newUser);
            var bm = data.compare(newUser);

            res.json(bm);
            // res.json(newUser);
        });

    app.get('/api/friends', function (req, res) {
            res.json(data.sampleUsers);
        });
}
