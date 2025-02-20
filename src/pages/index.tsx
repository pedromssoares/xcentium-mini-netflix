import { useCallback, useEffect, useState } from "react";
import { fetchMovies } from "../utils/api";
import { Movie } from "../types/Movie";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

export default function Home() {
  const router = useRouter();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [isRestored, setIsRestored] = useState(false);

  // detects if it was a page reload and clears localStorage
  useEffect(() => {
    const entries = window.performance.getEntriesByType("navigation");
    const navigation = entries[0] as PerformanceNavigationTiming;

    if (navigation?.type === "reload") {
      localStorage.removeItem("searchQuery");
      localStorage.removeItem("movies");
      localStorage.removeItem("currentPage");
      setMovies([]);
      setSearchQuery("");
      setPage(1);
    }
  }, []);

  // restores search and movies from localStorage on back to home
  useEffect(() => {
    if (isRestored) return; // Evita restaurar várias vezes

    const savedQuery = localStorage.getItem("searchQuery");
    const savedMovies = localStorage.getItem("movies");
    const savedPage = localStorage.getItem("currentPage");

    if (savedQuery) setSearchQuery(savedQuery);
    if (savedMovies) setMovies(JSON.parse(savedMovies));
    if (savedPage) setPage(parseInt(savedPage));

    setIsRestored(true);
  }, [isRestored]);

  // function to load movies
  const loadMovies = useCallback(
    async (query: string, pageNumber: number, updateUrl = true) => {
      setLoading(true);
      const data = await fetchMovies(query, pageNumber);

      if (data.length === 0) {
        setTotalPages(pageNumber - 1);
      } else {
        setMovies(data);
        setTotalPages(10);
      }

      setLoading(false);

      // updates URL query only if it's not a page change
      if (updateUrl) {
        router.replace(`/?q=${query}&page=${pageNumber}`, undefined, {
          shallow: true,
        });
      }

      // saves state to localStorage
      localStorage.setItem("searchQuery", query);
      localStorage.setItem("movies", JSON.stringify(data));
      localStorage.setItem("currentPage", pageNumber.toString());
    },
    [router]
  );

  // syncs with URL query
  useEffect(() => {
    if (!router.isReady || !isRestored) return;

    const { q, page } = router.query;

    if (q && page) {
      setSearchQuery(q as string);
      setPage(Number(page));
      loadMovies(q as string, Number(page), false);
    }
  }, [router.isReady, router.query, isRestored, loadMovies]);

  // deals with search
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setPage(1);
    loadMovies(query, 1);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header title="Flix" />

        {/*Semantic HTML and ARIA attributes for improved acessibility*/}
      <main role="main" className="container mx-auto p-4">
        <h1 className="sr-only">Flix - Search your favorite movies</h1>{" "}
        <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
        {loading ? (
          <div className="flex justify-center mt-6">
            <Loading />
          </div>
        ) : (
          <>
            <div
              role="list"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6"
            >
              {movies.length > 0 ? (
                movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))
              ) : (
                <p className="text-center col-span-full mt-6" role="alert">
                  {searchQuery
                    ? "No movies found."
                    : "Type a movie title and click search."}
                </p>
              )}
            </div>

            {/* pagination */ }
            {movies.length > 0 && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(newPage) => {
                  if (newPage >= 1 && newPage <= totalPages) {
                    setPage(newPage);
                    loadMovies(searchQuery, newPage);
                  }
                }}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}
