import {createContext,ReactNode,useState} from 'react'

import {MovieInterface} from '../types/Movie'

interface SearchContextType {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    searchResults: MovieInterface[];
    setSearchResults: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
    selectedMovie:string;
    setSelectedMovie:React.Dispatch<React.SetStateAction<string>>
  }


export const SearchContext=createContext<SearchContextType>({
    
        searchQuery: '',
        setSearchQuery: ()=>{},
        searchResults: [],
        setSearchResults:()=>{},
        selectedMovie:'',
        setSelectedMovie:()=>{}
      
})


export const SearchProvider=({children}:{children:ReactNode})=>{
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<MovieInterface[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<MovieInterface>({
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
      });
    return(
        <SearchContext.Provider value={{searchQuery,searchResults,setSearchQuery,setSearchResults,selectedMovie,setSelectedMovie}} >
        {children}
        </SearchContext.Provider>
    )
}

