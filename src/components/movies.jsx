import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService.js';
import Pagination from './common/pagination.jsx';
import Like from './common/like';

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 10,
  };

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

  handlePageChange = page =>{

  }

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p> there are no movies in the database </p>;

    return (
      <React.Fragment>
        <p> There are {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td> {movie.title}</td>
                  <td> {movie.genre.name}</td>
                  <td> {movie.numberInStock}</td>
                  <td> {movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete Movie
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
