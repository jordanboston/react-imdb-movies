import React from 'react';
import './movie.css';

interface MovieProps {
  Title: string;
  Poster: string;
  Year: string;
}

class Movie extends React.Component<MovieProps, {}> {
  render() {
    const { Title, Poster, Year } = this.props;

    return (
      <div className="movie">
        <div className="title-year">
          <h1 className="title">{Title}</h1>
          <h2 className="year">{Year}</h2>
        </div>
        <div className="poster">
          <img src={Poster} alt="my movie poster" />
        </div>
      </div>
    );
  }
}

export default Movie;
