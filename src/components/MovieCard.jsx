import '../css/MovieCard.css';

function MovieCard ({ movie }) {
    const onLike = () => {
        console.log('You liked the movie');
    }

    return (
        <div className="movie-card">
            <div className="movie-image">
                <img src={movie.url} alt={movie.title} />
                ♡
            </div>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onLike}></button>
            </div>
            <div className="movie-info">    
                <h3>{movie.title}</h3>
                <span>{movie.releaseDate}</span>
            </div>
        </div>
    )
}

export default MovieCard;