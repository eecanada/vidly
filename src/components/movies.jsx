import React, {Component} from 'react'
import {getMovies} from "../services/fakeMovieService.js"

class Movies extends Component {
  state = {
    movies: getMovies()
  }

  handleDelete =  movies => {

  }

  getMovieTitle(){
    return <ul> {this.state.movies.map((movie) => { return <li key={movie._id}> {movie.title} </li> })}</ul>
  }

  getMovieGenre(){
    return <ul> {this.state.movies.map((movie) => { return <li key={movie._id}> {movie.genre["name"]} </li> })}</ul>
  }

  

  render(){
    return <table> 
      <tr>
        <th> Title </th>
        <th> Genre </th>
        <th> Stock </th>
        <th> Rate</th>
        <button> Rate</button>
      </tr>

      <tr> 
      <td>{this.getMovieTitle()}   </td>
      <td>{this.getMovieGenre()}     </td>
      </tr>

      
      
    </table>
  }

}

export default Movies