const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const moviesSchema = new Schema( {
   
    name: String,
    vote: Number,
    overview: String,
    release: Date,
    picture: String,
    id: Number

 
})

module.exports = moviesSchema
