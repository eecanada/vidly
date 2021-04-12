import React, {Component} from 'react'
import {getMovies} from "../services/fakeMovieService.js"

class Movies extends Component {
  state = {
    movies: getMovies()
  }

  handleDelete = movies => {
    
  }

  render(){
    
    return (
<table className="table">
  <p> There are {this.state.movies.length} movies in the database</p>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
        </tr>
      </thead>

      <tbody>


        {this.state.movies.map((movie)=>{
          return <tr>

            <td> {movie.title}</td>
            <td> {movie.genre.name}</td>
            <td> {movie.numberInStock}</td>
            <td> {movie.dailyRentalRate}</td>
          </tr>
        })}


      </tbody>

    </table>
    )
    
    
    
    
  }

}

export default Movies