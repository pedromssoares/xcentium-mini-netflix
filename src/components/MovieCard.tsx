import Image from "next/image";
import { Movie } from "../types/Movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  const validPoster =
    movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png";

  return (
    <a
      href={`/movie/${movie.imdbID}`}
      className="group relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 animate-fade-in"
    >
      <Image
        src={validPoster}
        alt={movie.Title}
        width={300}
        height={450}
        className="rounded-lg"
        priority={true}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
        <h2 className="text-lg font-semibold text-white text-center">
          {movie.Title}
        </h2>
      </div>
    </a>
  );
}
