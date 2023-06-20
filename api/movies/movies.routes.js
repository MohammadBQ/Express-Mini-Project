const express = require('express');
const router = express.Router();
const {
  moviesCreate,
  moviesDelete,
  moviesUpdate,
  moviesGet,
  
} = require("./movies.controller");
const uploader = require("../../middleware/uploader")

router.param("movieId", async (req, res, next, movieId) => {
  try {
    const foundMovie = await fetchMovie(movieId);
    if (!foundMovie) return next({ status: 404, message: "Movie not found!" });
    req.movie = foundMovie;
    next();
  } catch (error) {
    return next(error);
  }
});


router.get("/", moviesGet);

router.post("/", upload.single("posterImage"), moviesCreate);

router.delete("/:movieId", moviesDelete);

router.put("/:movieId", moviesUpdate);

module.exports = router;
