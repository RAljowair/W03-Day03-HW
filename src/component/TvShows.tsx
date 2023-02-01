import React from "react";
import theLast from "../assets/theLast.jpeg";
import arrow from "../assets/arrow.jpg";
import friends from "../assets/friends.jpeg";
import got from "../assets/GOT.jpeg";
import thement from "../assets/ment.jpeg";

interface TvShow {
  name: string;
  img: string;
  releaseDate: Date;
  rate: number;
  isavailable: boolean;
}

let tvShows: TvShow[] = [
  {
    name: "Friends",
    img: friends,
    releaseDate: new Date("12/15/1999"),
    rate: 9.8,
    isavailable: true,
  },
  {
    name: "The last of us",
    img: theLast,
    releaseDate: new Date("01/22/2023"),
    rate: 8.6,
    isavailable: true,
  },
  {
    name: "Game of thrones",
    img: got,
    releaseDate: new Date("08/12/2010"),
    rate: 10,
    isavailable: true,
  },
  {
    name: "Arrow",
    img: arrow,
    releaseDate: new Date("7/01/2013"),
    rate: 3.2,
    isavailable: false,
  },
  {
    name: "The Mintlist",
    img: thement,
    releaseDate: new Date("05/05/2022"),
    rate: 8.2,
    isavailable: false,
  },
];

function TvShow(props: TvShow) {
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

function TvShows() {
  return (
    <div className="movies-container">
      <h2>Tv Shows</h2>
      <section className="movies-section">
        {tvShows.map((tvShow) => (
          <TvShow
            img={tvShow.img}
            name={tvShow.name}
            releaseDate={tvShow.releaseDate}
            rate={tvShow.rate}
            isavailable={tvShow.isavailable}
          />
        ))}
      </section>
    </div>
  );
}

export default TvShows;
