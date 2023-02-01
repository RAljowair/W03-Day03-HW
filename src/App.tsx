import { useState } from "react";
import "./App.css";
import Nav from "./component/Nav";
import MoviesList from "./component/Movies";
import Footer from "./component/Footer";
import TvShows from "./component/TvShows";

function App() {
  return (
    <div className="App">
      <Nav />
      <MoviesList />
      <TvShows />
      <Footer />
    </div>
  );
}

export default App;
