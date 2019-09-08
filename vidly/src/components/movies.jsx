import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
export class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    //console.log(this.state.movies);
    return this.renderMovies();
  }
  renderMovies() {
    return this.state.movies.length === 0 ? (
      <p>There are no movies in the database</p>
    ) : (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Daily Rental Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.deleteMovie(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  deleteMovie(movie) {
    let _movies = this.state.movies;
    for (let i = 0; i < _movies.length; i++) {
      if (_movies[i]._id === movie._id) {
        _movies.splice(i, 1);
      }
    }
    this.setState({ movies: _movies });
  }
}
