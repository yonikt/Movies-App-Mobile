const moviesSchema = require( './moviesSchema' )
const mongoose = require( 'mongoose' )

const moviesModel = mongoose.model( 'movie', moviesSchema )



module.exports = moviesModel
