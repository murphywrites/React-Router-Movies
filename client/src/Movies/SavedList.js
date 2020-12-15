import React from 'react';
import {Link, useHistory, useRouteMatch} from 'react-router-dom'

export default function SavedList(props) {
  let history = useHistory();
  let url = useRouteMatch();
  console.log(history)
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick = {() => {
      history.push(`/`)}}>
        {/* // <Link to="/"> */}
        Home
        {/* // </Link> */}
        </div>
    </div>
  );
}
