import React, {Component} from 'react'
import {getMovies} from "../services/fakeMovieService.js"

class Movies extends Component {
  state = {
    movies: getMovies()
  }

  handleDelete =  movies => {

  }

  getMovieTitle(){
    // return <ul> {this.state.movies.forEach((movie) => { return <li key={movie._id}> {movie.title} </li> })}</ul>

    return <ul> {this.state.movies.map((movie) => { return <li key={movie._id}> {movie.title} </li> })}</ul>



  }

  render(){
    return <div> 
      {this.getMovieTitle()}  
    </div>
  }

}

export default Movies