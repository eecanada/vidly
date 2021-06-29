import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService.js';
import Pagination from './common/pagination.jsx';
import { paginate } from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import ListGroup from './common/listGroup.jsx';
import MoviesTable from './moviesTable.jsx';

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: null,
    hobbies: 'gym',
  };

  componentDidMount() {
    const genres = [{ name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    console.log(movie);
    //m is the this.state array, filter only returns what meets the condition, so here I am returning everything that does not equal to what I currently clicked
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    let movies = this.state.movies.map((m) => {
      if (m._id === movie._id) {
        m.liked = !m.liked;
      }
      return m;
    });
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleTestEvent = (hobbie) => {
    let code = hobbie;
    this.setState({ hobbies: code });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
    console.log(genre);
  };

  render() {
    console.log(this.state.genres);
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
    } = this.state;

    if (count === 0) return <p> there are no movies in the database </p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <button onClick={() => this.handleTestEvent('sleeping')}>
            {this.state.hobbies}
          </button>

          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>

        <div className="col">
          <p> There are {filtered.length} movies in the database</p>

          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />

          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
