const AP_KEY = "";
const AP_BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async () => {
    const response = await fetch(`${AP_BASE_URL}/movie/popular?api_key=${AP_KEY}`);
    const data = await response.json();
    return data;
}

export const searchMovies = async (searchQuery) => {
    const response = await fetch(`${AP_BASE_URL}/search/movie?api_key=${AP_KEY}&query=${encodeURIComponent(searchQuery)}`);
    const data = await response.json();
    return data;
}