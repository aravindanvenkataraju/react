import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";
import _ from "lodash";
export class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "",
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  render() {
    //console.log(this.state.movies);
    return this.renderMovies();
  }

  getPagedData() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const data = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: data };
  }
  renderMovies() {
    let count = this.state.movies.length;
    const { pageSize, currentPage } = this.state;
    //console.log("in render method selected Genre : ", selectedGenre);
    const { totalCount, data: movies } = this.getPagedData();
    return count === 0 ? (
      <p>There are no movies in the database</p>
    ) : (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <p>Showing {totalCount} movies in database</p>
            <MoviesTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleDelete = movie => {
    let _movies = this.state.movies;
    for (let i = 0; i < _movies.length; i++) {
      if (_movies[i]._id === movie._id) {
        _movies.splice(i, 1);
      }
    }
    this.setState({ movies: _movies });
  };

  handleLike = movie => {
    //console.log("Like clicked movie : " + movie.title);
    let _movies = this.state.movies;
    let index = _movies.indexOf(movie);
    _movies[index] = { ..._movies[index] };
    _movies[index].liked = !_movies[index].liked;
    this.setState({ _movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    //console.log("Genre selected : ", genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    //console.log("sorting path: ", path);
    this.setState({ sortColumn });
  };
}
