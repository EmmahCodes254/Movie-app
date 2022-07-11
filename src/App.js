import {useEffect, useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'

// 6cc4130

const API_URL = 'http://www.omdbapi.com/?apikey=6cc4130';

//const movie1 = {
    //"Title": "Spider-Man Title Reveal",
    //"Year": "2021",
    //"imdbID": "tt14122734",
    //"Type": "movie",
   // "Poster": "N/A"
//}

const App = () => {

    //useState
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // function to fetch movies
    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s={title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return(
        <div className = 'app'>
            <h1>Movie Ocean</h1>

            <div className = 'search'>
                <input
                placeholder = "Search for Movies"
                Value ={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />

                <img
                src = {SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)} />
                
            </div>

            {
                movies?.length > 0
                ?(
                    <div className='container'>
                {movies.map((movie) => (
                    <MovieCard movie = {movie} />
                ))}
            </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

            

        </div>
    );
}

export default App; 