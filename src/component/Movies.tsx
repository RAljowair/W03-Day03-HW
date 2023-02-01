import React from "react";
import avatar from "../assets/Avatar.jpeg";
import infinityPool from "../assets/Infinity Pool.jpeg";
import pussInBoots from "../assets/puss in boots.jpg";
import theMenu from "../assets/the menu.jpeg";
import inter from "../assets/Interstellar.jpg";

interface movie {
  name: string;
  img: string;
  releaseDate: Date;
  rate: number;
  isavailable: boolean;
}

let movies: movie[] = [
  {
    name: "Avatar: The Way of Water",
    img: avatar,
    releaseDate: new Date("12/15/2022"),
    rate: 7.8,
    isavailable: true,
  },
  {
    name: "Interstellar",
    img: inter,
    releaseDate: new Date("02/07/2014"),
    rate: 8.6,
    isavailable: false,
  },
  {
    name: "The Menu",
    img: theMenu,
    releaseDate: new Date("08/12/2022"),
    rate: 7.2,
    isavailable: true,
  },
  {
    name: "Infinity Pool",
    img: infinityPool,
    releaseDate: new Date("7/01/2023"),
    rate: 6.9,
    isavailable: true,
  },
  {
    name: "Puss in Boots: The Last Wish",
    img: pussInBoots,
    releaseDate: new Date("05/05/2022"),
    rate: 7.9,
    isavailable: false,
  },
];

function Movie(props: movie) {
  return (
    <div className="movie-card">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p>Released: {props.releaseDate.toDateString()}</p>
      <p>Rate: {props.rate}/10</p>
      <p>{props.isavailable ? "Available" : "Comming Soon"}</p>
    </div>
  );
}

function MoviesList() {
  return (
    <div className="movies-container">
      <h2>Movies</h2>
      <section className="movies-section">
        {movies.map((movie) => (
          <Movie
            img={movie.img}
            name={movie.name}
            releaseDate={movie.releaseDate}
            rate={movie.rate}
            isavailable={movie.isavailable}
          />
        ))}
      </section>
    </div>
  );
}

export default MoviesList;
