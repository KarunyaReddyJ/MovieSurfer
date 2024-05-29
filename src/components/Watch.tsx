import ReactPlayer from "react-player";
import { useState, useEffect } from 'react';
import movieTrailer from 'movie-trailer';
import { useSearch } from "../store/useSearch"; 
import MoviePoster from "./MoviePoster";
import axios from "axios";
import constants from "../utils/constants";
function Watch() {
  const [URL, setURL] = useState<string>('');
  const { selectedMovie, setSelectedMovie } = useSearch();

  useEffect(() => {
    if (selectedMovie) {
      movieTrailer(selectedMovie.Title).then(res => {
        setURL(res);
      }).catch(err => {
        console.error('Error fetching trailer:', err);
      });
    }
    const getData=async()=>{
      const response= (await axios.get(`${constants.OMDBURL}&i=${selectedMovie.imdbID}`)).data
      console.log('watch',response)
      setSelectedMovie(response)
    }
    getData()
  }, [selectedMovie,setSelectedMovie]);

  return (
    <div className="flex h-screen w-screen">
      <button className="mt-4 fixed right-3 top-0 p-2 rounded-md bg-zinc-800 px-4 border-white border-2" onClick={() => setSelectedMovie({
  Title: "",
  Year: "",
  Rated: "",
  Released: "",
  Runtime: "",
  Genre: "",
  Director: "",
  Writer: "",
  Actors: "",
  Plot: "",
  Language: "",
  Country: "",
  Awards: "",
  Poster: "",
  Ratings: [],
  Metascore: "",
  imdbRating: "",
  imdbVotes: "",
  imdbID: "",
  Type: "",
  DVD: "",
  BoxOffice: "",
  Production: "",
  Website: "",
  Response: ""
})}>
        Back
      </button>
      
        <ReactPlayer url={URL} controls={true} width="50%"  height="100%" />
      <MoviePoster Title={selectedMovie.Title}
              Released={selectedMovie.Released}
              Genre={selectedMovie.Genre}
              Ratings={selectedMovie.Ratings}
              BoxOffice={selectedMovie.BoxOffice}
              Poster={selectedMovie.Poster}
              key={selectedMovie.Title}
              Type={selectedMovie.Type}
              Year={selectedMovie.Year}
              imdbID={selectedMovie.imdbID}
               />
    </div>
  );
}

export default Watch;
