// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var data = require('./data/friends.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, 'public')));

require('./routing/html-routes.js')(app);
require('./routing/api-routes.js')(app);



// app.get('/api/friends', function (req, res) {
//     console.log(data);
//     res.send('ok');
// });

// app.post('/api/friends', function (req, res) {
//     var newUser = req.body;
//     console.log(newUser);
//     res.json(data.compare(newUser));
// })

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
