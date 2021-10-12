const slugify = require('slugify');
const validator = require('validator');
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A movie must have a name'],
    unique: true,
    trim: true,
  },
  slug: String,
  language: {
    type: String,
    required: [true, 'A movie must have a language'],
  },
  shortDescription: {
    type: String,
    required: [true, 'A movie must have a short description'],
    trim: true,
  },
  timeDuration: {
    type: String,
    required: [true, 'A movie must have a time duration'],
  },
  movieType: {
    type: String,
    required: [true, 'A movie must have a movie type'],
  },
  ageLimit: {
    type: String,
    required: [true, 'A movie must have a age limit'],
  },
  ratingsQuantity: {
    type: Number,
  },
  banner: {
    type: String,
    required: [true, 'A movie must have a banner'],
  },
  expireTime: {
    type: String,
    required: [true, 'A movie must have a expire time'],
  },
  description: {
    type: String,
    required: [true, 'A movie must have a description'],
    trim: true,
  },
  rentPrice: {
    type: Number,
    required: [true, 'A movie must have a price'],
  },
  cast: Array,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
movieSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
