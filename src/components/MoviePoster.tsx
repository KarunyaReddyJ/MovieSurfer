import { useSearch } from "../store/useSearch"; 
import { MoviePosterProps } from './types';

function MoviePoster(props: MoviePosterProps) {
  const { setSelectedMovie } = useSearch();

  return (
    <div className="min-h-96 h-auto p-4 shadow-md rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105" onClick={() => {
      setTimeout(() => {
        setSelectedMovie(prev => ({
          ...prev,
          ...props
        }))
      }, 1000);
    }}>
      <h2 className="text-2xl font-bold truncate mb-2">{props.Title}</h2>
      <div className="mb-4">
        <img src={props.Poster} alt={`${props.Title} Poster`} className="rounded-lg shadow-md" />
      </div>
     { (props.notHome || false ) && <><p className="mb-2"><strong>Released:</strong> {props.Released}</p>
      <p className="mb-2"><strong>Box Office:</strong> {props.BoxOffice}</p>
      <div className="mb-2">
        {props.Ratings && props.Ratings.map((rating, index) => (
          <div key={index}>
            <strong>{rating.Source}:</strong> {rating.Value}
          </div>
        ))}
      </div>
      <p className="mb-2"><strong>Genre:</strong> {props.Genre}</p></>  }
      <p className="mb-2"><strong>Year:</strong> {props.Year}</p>
    </div>
  );
}

export default MoviePoster;
