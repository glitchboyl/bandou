var config = require('../config')
var express = require('express')
var request = require('request')
var rp = require('request-promise')
var port = process.env.PORT || config.dev.port

var app = express()

// Movie
app.get('/movie_annual2016', function (req, res) {
    request(`https://movie.douban.com/ithil_j/activity/movie_annual2016`, function (err, response, body) {
        res.end(body);
    })
})
app.get('/movie_annual2016/widget', function (req, res) {
    var nth = req.query.nth || 0;
    request(`https://movie.douban.com/ithil_j/activity/movie_annual2016/widget/${nth}`, function (err, response, body) {
        res.end(body);
    })
})
// Game
app.get('/game_annual2016', function (req, res) {
    request({
        url: `https://www.douban.com/ithil_j/activity/game_annual2016`,
        headers: {
            'User-Agent': 'request'
        }
    }, function (err, response, body) {
        res.end(body);
    })
})
app.get('/game_annual2016/widget', function (req, res) {
    var nth = req.query.nth || 0;
    request({
        url: `https://www.douban.com/ithil_j/activity/game_annual2016/widget/${nth}`,
        headers: {
            'User-Agent': 'request'
        }
    }, function (err, response, body) {
        res.end(body);
    })
})
// Book
app.get('/book_annual2016', function (req, res) {
    request(`https://book.douban.com/ithil_j/activity/book_annual2016`, function (err, response, body) {
        res.end(body);
    })
})
app.get('/book_annual2016/widget', function (req, res) {
    var nth = req.query.nth || 0;
    request(`https://book.douban.com/ithil_j/activity/book_annual2016/widget/${nth}`, function (err, response, body) {
        res.end(body);
    })
})
// Drama
app.get('/drama_annual2016', function (req, res) {
    request({
        url: `https://www.douban.com/ithil_j/activity/drama_annual2016`,
        headers: {
            'User-Agent': 'request'
        }
    }, function (err, response, body) {
        res.end(body);
    })
})
app.get('/drama_annual2016/widget', function (req, res) {
    var nth = req.query.nth || 0;
    request({
        url: `https://www.douban.com/ithil_j/activity/drama_annual2016/widget/${nth}`,
        headers: {
            'User-Agent': 'request'
        }
    }, function (err, response, body) {
        res.end(body);
    })
})
// Music
app.get('/music_annual2016', function (req, res) {
    request(`https://music.douban.com/ithil_j/activity/music_annual2016`, function (err, response, body) {
        res.end(body);
    })
})
app.get('/music_annual2016/widget', function (req, res) {
    var nth = req.query.nth || 0;
    request(`https://music.douban.com/ithil_j/activity/music_annual2016/widget/${nth}`, function (err, response, body) {
        res.end(body);
    })
})
app.get('/resources', function (req, res) {
    var resources = req.query.request || null;
    var resType = req.query.type || null;
    if (resources.substr(0, 4) != 'http') resources = `http:${resources}`
    var options = {
        url: resources,
        encoding: null
    };
    if (resType == 'video') {
        res.setHeader('Content-Type', 'video/mp4');
    } else if (resType == 'image') {
        res.setHeader('Content-Type', 'image/jpeg');
    }
    rp(options).then(function (repos) {
        res.send(repos);
    });
})

app.listen(parseInt(port) + 1, () => {
    console.log('> API-Server is listening');
})