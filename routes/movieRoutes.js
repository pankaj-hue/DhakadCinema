const express = require('express');
const movieController = require('../controllers/movieController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/movie-stats').get(movieController.getMoviestats);
// router.route('/new-releases').get(movieController.upcomingReleases);

router
  .route('/top-5-cheap')
  .get(movieController.aliasTopMovies, movieController.getAllMovies);
router
  .route('/')
  .get(authController.protect, movieController.getAllMovies)
  .post(movieController.createMovie);
router
  .route('/:id')
  .get(movieController.getMovie)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;
