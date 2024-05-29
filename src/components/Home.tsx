import movie_list from "../utils/MoviesList";
import { useState, useEffect } from "react";
import constants from "../utils/constants";
import axios from "axios";
import { MovieInterface } from "../types/Movie";
import MoviePoster from "./MoviePoster";
import Watch from "./Watch";
import { useSearch } from "../store/useSearch"; 
const Home = () => {
  const [movieOnHome, setMovieOnHome] = useState<MovieInterface[]>([]);
  const {selectedMovie}=useSearch()
  useEffect(() => {
    const getData = async(movie_list: string[]) => {
      try {
         const moviePromises = movie_list.map(movie => axios.get(`${constants.OMDBURL}&s=${movie}`));
        const movieResponses = await Promise.all(moviePromises);
        const movies = movieResponses.map(response => response.data.Search[0]);
        setMovieOnHome(movies);
      } catch (error) {
        console.log('cannot get movies',error)
      }
    };
    getData(movie_list);
  }, []);
  return (
    <div className="grid grid-cols-3">
       { selectedMovie.Title===''?
      movieOnHome.length>0 ? (
        (movieOnHome || []).map((movie,index) => {
            if(index<movieOnHome.length){
          return (
            <MoviePoster
              Title={movie.Title}
              Released={movie.Released}
              Genre={movie.Genre}
              Ratings={movie.Ratings}
              BoxOffice={movie.BoxOffice}
              Poster={movie.Poster}
              key={movie.Title}
              Type={movie.Type}
              Year={movie.Year}
              imdbID={movie.imdbID}
              index={index}
            />
          );}
        })
      ) : (
        <p>no data</p>
      ):
      <Watch/>
    }
    </div>
  );
};
export default Home;
