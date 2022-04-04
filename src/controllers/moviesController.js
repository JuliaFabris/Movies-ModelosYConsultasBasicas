const db = require('../database/models');
const { Op } = require('sequelize'); 


module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
        .then((movies) => {
            res.render('moviesList', {
                movies
            })
        }) 
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
        .then((movie) => {
            res.render('moviesDetail', { // tester: res.send(movie)
                movie
            })
        })
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [['release_date', 'DESC']]
        })
        .then((movies) => {
            res.render('newestMovies', {
                movies
            })
        })
    },
    recommended: (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[Op.gte] : 8}
            },
            order: [['release_date', 'DESC']],
            limit: 5
        })
        .then((movies) => {
            res.render('recommendedMovies', {
                movies
            })
        })
    },
    genresList: (req, res) => {
        db.Genre.findAll()
        .then((genres) => {
            res.render('genresList', {
                genres
        })
    })
    }
}