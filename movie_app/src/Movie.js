import React, { Component } from "react";
import logo from "./logo.svg";
import "./Movie.css";

// class Movie extends Component {
//   render() {
//     return (
//       <div className="Movie">
//         <MoviePicture poster={this.props.poster} />

//         <div>
//           <h1>{this.props.title}</h1>
//         </div>
//       </div>
//     );
//   }
// }

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePicture poster={poster} alt={title} />
      </div>

      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => (
            <MovieGenres genre={genre} key={index} />
          ))}
        </div>
        <p className="Movie_Synopsis">{synopsis}</p>
      </div>

      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

function MovieGenres({ genre }) {
  return <span className="Movie_Genres">{genre}</span>;
}

// class MoviePicture extends Component {
//   render() {
//     return <div className="yosup">{this.props.poster}</div>;
//   }
// }

function MoviePicture({ poster, alt }) {
  return <img className="yosup" src={poster} alt={alt} title={alt} />;
}
export default Movie;
