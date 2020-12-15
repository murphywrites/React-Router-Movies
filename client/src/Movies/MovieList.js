import React from 'react';
import { Link, useRouteMatch, useParams, useHistory } from 'react-router-dom'

export default function MovieList(props) {
  const { url } = useRouteMatch();
  const {movies} = props
 
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        // <Link to={`/movies/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie}/>
        // </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id} = props.movie;
  const  history = useHistory();
  console.log(history)
  // const {history} = props;

  return (
    <div className="movie-card"  onClick = {() => {
      history.push(`/movies/${id}`)
    }} >
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
