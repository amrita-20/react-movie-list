import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
    return useContext(MovieContext);
}

export const movieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('favorites');
        if(data) {
            setFavorites(JSON.parse(data));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));

        const addFavorites = (movie) => {
            setFavorites(prev => [...prev, movie]);
        }

        const removeFavorites = (movieId) => {
            setFavorites(prev => prev.filter((movie) => movie.id !== movieId));
        }

        const isFavorite = (movieId) => {
            return favorites.some((movie) => movie.id === movieId);
        }
        const value = {
            favorites,
            addFavorites,
            removeFavorites,
            isFavorite
        }

    }, [favorites])

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}