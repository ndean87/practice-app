import React from 'react'

const List = ({ movies }) => {
  const showMovies = () => {
    return movies.map((movie, index) => {
      return <div key={index}>
        <ul>
        <li>
        {movie.title}
        </li>
        <li>
        {movie.description}
        </li>
        <li>
        {movie.release_date}
        </li>
        <li>
        {movie.rt_score}
        </li>
        </ul>
      </div>

    })
  }
  return (
  <div>
    {showMovies()}
  </div>
)
}

export default List
