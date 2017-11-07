import React, {Component} from 'react'
import Form from './Form'
import List from './List'

export default class MainContainer extends Component{
  state = {
    movies: [],
    allmovies: []
  }

  componentDidMount(){
    this.handleFetch()
  }

  setMovies(json){
    this.setState({
        movies: json,
        allmovies: json
      })
  }

  handleSearch = (query) => {
    const goodMovies = this.state.allmovies.filter((movie) => {
      return movie.description.toLowerCase().includes(query.toLowerCase())
    })
    this.setState({
      movies: goodMovies
    })
  }

  handleFetch = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(json => this.setMovies(json))

  }

  render(){
    return(
      <div>
        <Form handleSubmit={this.handleSearch}/>
        <List movies={this.state.movies}/>
      </div>
    )
  }
}
