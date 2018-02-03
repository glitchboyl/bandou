var express = require('express')
var request = require('request')
// var rp = require('request-promise')
var port = (process.env.PORT || 5000);

var app = express()

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/',(req,res)=>{
    res.end('Hello Heroku.');
})
// Movie
app.get('/movie_annual2016', function (req, res) {
    request(`https://movie.douban.com/ithil_j/activity/movie_annual2016`, function (err, response, body) {
        res.end(body);
    })
})
app.get('/movie_annual2016/widget', function (req, res) {
    var nth = (req.query.nth || 0);
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
    var nth = (req.query.nth || 0);
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
    var nth = (req.query.nth || 0);
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
    var nth = (req.query.nth || 0);
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
    var nth = (req.query.nth || 0);
    request(`https://music.douban.com/ithil_j/activity/music_annual2016/widget/${nth}`, function (err, response, body) {
        res.end(body);
    })
})
app.get('/get_video', function (req, res) {
    var resources = (`https://${req.query.request}` || null);
    var options = {
        url: resources,
        encoding: null
    };
    res.setHeader('Content-Type', 'video/mp4');
    rp(options).then(function (repos) {
        res.send(repos);
    });
})
var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})
var server = app.listen(port)
module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}