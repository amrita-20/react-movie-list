import MovieCard from "../components/MovieCard";
import { useState } from 'react';
import '../css/Home.css';
import { fetchPopularMovies, searchMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const fetchMovies = async () => {
            try {
                const data = await fetchPopularMovies();
                setMovies(data);
            }
            catch(error) {
                console.error('Error fetching popular movies', error);
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);


    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim())
            return;
        setLoading(true);

        try{
            const response = await searchMovies(searchQuery);
            setMovies(response);
            setError(null);
        }
        catch(erro) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className="home"> 
            <form className="search-bar" onSubmit={handleSearch}>
                <input type="text" className="search-input" placeholder="Search for a movie"  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-btn">Search</button>
            </form>
            {error && <div className="error">{error}</div>}
            {loading ? <p>Loading...</p> : 
                <div className="movie-list">{
                    movies.map((movie) => {
                        return <MovieCard key={movie.id} movie={movie} />
                    })}
                </div>
            }
        </div>  
    )
}

export default Home;