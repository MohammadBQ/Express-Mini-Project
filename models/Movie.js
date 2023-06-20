const { model, Schema } = require('mongoose');

const MovieSchema = new Schema({
  title: { type:String, required: true },
  genre: { type: String, required: true},
  releaseDate: { type: Number, required: true},
  posterImage: { type: String, required: true},
  rating: {type: Number, dafault: 0 , required: false}
  
});

module.exports = model('Movie', MovieSchema);
