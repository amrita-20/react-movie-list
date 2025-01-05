import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites.length > 0) {
    return (
      <>
        <div className="favorites-title">Favorites Movies</div>
        <div className="movie-list">
          {favorites.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </>
    );
  }

  return (
    <div className="favorites">
      <h2>No favorite movies yet</h2>
      <p>Start adding movies to your favorites</p>
    </div>
  );
}

export default Favorites;
