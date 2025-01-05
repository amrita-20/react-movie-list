import MovieCard from "../components/MovieCard";
import { useState } from 'react';
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const movies = [
        { 
            id: 1,
            title: "The Shawshank Redemption",
            url: "https://www.imdb.com/title/tt0111161/",
            releaseDate: "1994"
        },
        {
            id: 2,
            title: "The Godfather",
            url: "https://www.imdb.com/title/tt0068646/",
            releaseDate: "1972"
        },
        {
            id: 3,
            title: "The Dark Knight",
            url: "https://www.imdb.com/title/tt0468569/",
            releaseDate: "2008"
        }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredMovies = movies.filter((movie) => movie.title.toLowerCase() === searchQuery.toLowerCase());
        console.log('Searching for a movie', filteredMovies);

    }
    return (
        <div className="home"> 
            <form className="search-bar" onSubmit={handleSearch}>
                <input type="text" className="search-input" placeholder="Search for a movie"  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movie-list">{
                movies.map((movie) => {
                    return movie.title.toLowerCase().startsWith(searchQuery) && 
                        <MovieCard key={movie.id} movie={movie} />
                    
                })}
            </div>
        </div>  
    )
}

export default Home;