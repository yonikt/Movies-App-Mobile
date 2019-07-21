const express = require('express')
const request = require('request-promise')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 1996
const moviesModel = require('./models/moviesModel')
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/movies', function (req, res) {
    request.get(`https://api.themoviedb.org/3/discover/movie?api_key=cd322f159b1374e396d35c26a3ba3128&language=he&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`, function (error, response) {
        let resp = JSON.parse(response.body)
        resp = resp.results.map(i => ({ name: i.title, vote: i.vote_average, overview: i.overview, release: i.release_date, picture: i.poster_path }))
        res.send(resp)

    })
})

app.get('/save', function (req, res) {
    moviesModel.find({}, function (err, data) {
        res.send(data)
    })
})


//FUTURE UPDATES

// app.get('/movies/:id', function (req, res) {
//     let id = req.params.id
//     request.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cd322f159b1374e396d35c26a3ba3128&language=en-US`, function (error, response) {

//         let resp = JSON.parse(response.body)
//         resp = { genres: resp.genres, runtime: resp.runtime }
//         res.send(resp)
//     })
// })


// app.get('/catalog/:name', function (req, res) {
//     let name = req.params.name
//     name = encodeURIComponent(name)
   
//     request.get(`https://api.themoviedb.org/3/search/movie?api_key=cd322f159b1374e396d35c26a3ba3128&language=he&query=${name}page=1&include_adult=false`, function (error, response) {
//         let resp = JSON.parse(response.body)
//         // resp = resp.results.map(i => ({ name: i.title, vote: i.vote_average, overview: i.overview, release: i.release_date, picture: i.poster_path }))
//         res.send(resp)

//     })
// })


app.post('/save', (req, res) => {
    const m2 = new moviesModel(req.body)
    m2.save(() => res.json({ success: true }))
})


app.delete('/movies/:movieName', function (req, res) {
    const movie = req.params.movieName
    moviesModel.findOneAndRemove({ 'name': movie }).then(function () {
    })
    res.end()
})




mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/movies', { useNewUrlParser: true }).then(() => {
    app.listen(process.env.PORT || port, () => console.log(`Running server on port ${port}`))
})



