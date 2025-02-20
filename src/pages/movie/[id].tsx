import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchMovieDetails } from "../../utils/api";
import { Movie } from "../../types/Movie";
import Image from "next/image";
import Header from "@/src/components/Header";
import Loading from "@/src/components/Loading";

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id && typeof id === "string") {
      const getMovie = async () => {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      };
      getMovie();
    }
  }, [id]);

  if (!movie) return <Loading />;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header title="Flix" />
      <main
        role="main"
        className="flex flex-col md:flex-row gap-8 items-center p-8"
      >
        <Image
          src={
            movie.Poster && movie.Poster.startsWith("http")
              ? movie.Poster
              : "/placeholder.jpg"
          }
          alt={
            movie.Poster && movie.Poster.startsWith("http")
              ? `${movie.Title} movie poster`
              : "Movie poster not available"
          }
          className="w-64 rounded-lg shadow-lg border-4 border-gray-700"
          width={300}
          height={450}
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">{movie.Title}</h1>
          <p className="text-gray-300 mb-2">
            {movie.Plot || "No description available."}
          </p>
          <p className="mt-2 text-lg">
            <strong>⭐ Rating:</strong> {movie.imdbRating || "N/A"}
          </p>
          <p className="text-lg">
            <strong>📅 Released:</strong> {movie.Released || "Unknown"}
          </p>
        </div>
      </main>
    </div>
  );
}
