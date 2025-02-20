import { Movie } from "../types/Movie";

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query: string, page: number = 1) => {
  if (!query) return [];

  try {
    console.log(`Fetching movies: ${query}, Page: ${page}`);
    const res = await fetch(
      `${BASE_URL}?s=${query}&page=${page}&apikey=${API_KEY}`
    );
    const data = await res.json();

    if (data.Response === "False") {
      return [];
    }

    return data.Search || [];
  } catch (error) {
    console.error("OMDb API Fetch Error:", error);
    return [];
  }
};

export const fetchMovieDetails = async (id: string): Promise<Movie> => {
  if (!API_KEY) {
    console.warn("Using mock data. API Key is missing.");
    return {
      imdbID: id,
      Title: "Mock Movie Details",
      Poster: "https://via.placeholder.com/300x450?text=Mock+Movie",
      Plot: "This is a mock description of the movie.",
      imdbRating: "8.5",
      Released: "2022",
    };
  }

  const res = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  return res.json() as Promise<Movie>;
};
