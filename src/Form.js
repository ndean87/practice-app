import React, {Component} from 'react'

export default class MainContainer extends Component{
  state = {
    searchInput: ""
  }

  onSearch = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.searchInput)
    this.setState({
      searchInput: ""
    })
  }

  handleChange = (event) => {
    this.setState({
    searchInput: event.target.value
  })
}


  render(){
    return(
      <form onSubmit={this.onSearch} >
        <input type='text' onChange={this.handleChange} value={this.state.searchInput}/>
        <input type='submit'/>
      </form>
    )
  }
}
