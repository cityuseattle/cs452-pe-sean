import React, { useState } from 'react';
import './MovieList.css';

function MovieList() {
  const movies = [
    { title: 'Inception', genre: 'Science Fiction', releaseYear: 2010 },
    { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
    { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
    { title: 'Interstellar', genre: 'Science Fiction', releaseYear: 2014 },
    { title: 'Gladiator', genre: 'Action', releaseYear: 2000 }
  ];

  // Get all unique genres for dropdown (plus "All Genres")
  const genres = ['All Genres', ...new Set(movies.map(m => m.genre))];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  // Filter movies based on selected genre
  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter(movie => movie.genre === selectedGenre);

  // Handle clicking on a movie card
  const handleMovieClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  return (
    <div className="movie-container">
      <h1>Movie List</h1>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
