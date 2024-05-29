import {useState} from 'react'
import Search from './components/Search'
import {MovieInterface} from './types/Movie'
import Home from './components/Home';
// import Home from './components/Home';
interface MovieQuery {
  s:string;
  results:MovieInterface[] | MovieInterface;
  selected:MovieInterface;
  search:boolean;
}
const emptyMovieData: MovieInterface = {
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
}
const App=()=>{
  const [state, setstate] = useState<MovieQuery>({
    s:'',
    results:[],
    selected:emptyMovieData,
    search:false
  });
  // Home()
  return(
    <div className='w-screen bg-gray-800 min-h-screen h-fit text-white'>
    <Search s={state.s} setData={setstate} />
    <Home/>
    </div>
  )
}
export default App
export type {MovieQuery}