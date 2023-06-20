const Movie = require("../../models/Movie");


const moviesCreate = async (req, res, next) => {
    try {
      if(req.file){
        req.body.image = req.file.path.replace("\\","/")
      }
      const newMovie = await Movie.create(req.body);
      res.status(201).json(newMovie);
    } catch (error) {
      next(error);
    }
  };
  const moviesDelete = async (req, res) => {
    const { movieId } = req.params;
    try {
      const foundMovie = await Movie.findById(movieId);
      if (foundMovie) {
        await foundMovie.deleteOne();
        res.status(204).end();
      } else {
        res.status(404).json({ message: "movie not found in delete" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  
  const moviesUpdate = async (req, res, next) => {
    const { movieId } = req.params;
  try {
    const foundMovie = await Movie.findById(movieId);

    if (foundMovie) {
      if (req.file) {
        req.body.posterImage = req.file.path.replace("\\", "/");
      }
      await foundMovie.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "movie not found" });
    }
  } catch (error) {
    next(error)
  }
};
    
    
  
  const moviesGet = async (req, res, next) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (error) {
      next(error);
    }
  };
  
  const fetchMovie = async (req, res, next) => {
    async (movieId) => {
      const foundMovie = await Movie.findById(movieId);
      return foundMovie;
    };
  };
  
  




  module.exports = moviesCreate
  module.exports = moviesDelete
  module.exports = moviesUpdate
  module.exports = moviesGet
  module.exports = fetchMovie