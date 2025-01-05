import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard ({ movie }) {
    const { addFavorites, removeFavorites, isFavorite } = useMovieContext();
    const favorite = isFavorite(movie.id);

    const onFavoriteClick = (e) => {
        e.preventDefault();
        if(favorite) {
            removeFavorites(movie.id);
        }
        else {
            addFavorites(movie);
        }
    }

    return (
        <div className="movie-card">
            <div className="movie-image">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                ♡
            </div>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavoriteClick}></button>
            </div>
            <div className="movie-info">    
                <h3>{movie.title}</h3>
                <span>{movie.releaseDate}</span>
            </div>
        </div>
    )
}

export default MovieCard;