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


  getMovieStock(){
    return <ul> {this.state.movies.map((movie)=>{return <li key={movie._id}> {movie.numberInStock} </li>})}</ul>
  }

  getMovieRate(){
    return <ul> {this.state.movies.map((movie)=>{ return <li key={movie._id}> {movie.dailyRentalRate} </li>})}</ul>
  }

  getTotalMovieCount(){
    return <p> Showing {this.state.movies.length} movies in the database</p>
  }
  
  render(){
    return  <table> 
        {this.getTotalMovieCount()}
      <tr>
        <th> Title </th>
        <th> Genre </th>
        <th> Stock </th>
        <th> Rate</th>
      </tr>

      <tr> 
      <td>{this.getMovieTitle()} </td>
      <td>{this.getMovieGenre()} </td>
      <td>{this.getMovieStock()} </td>
      <td>{this.getMovieGenre()} </td>
      </tr>

      
      
    </table>
  }

}

export default Movies