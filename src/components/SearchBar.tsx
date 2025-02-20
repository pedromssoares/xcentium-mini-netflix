import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearch, initialQuery }: { onSearch: (query: string) => void; initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setQuery(initialQuery || "");
  }, [initialQuery]);

  const handleSearch = async () => {
    if (query.trim().length >= 3) {
      setLoading(true);
      await onSearch(query.trim());
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-gray-800 p-3">
      <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-md shadow-lg">
        <FiSearch className="text-white w-6 h-6" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search movies..."
          className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-indigo-500 px-4 py-2 rounded-md text-white hover:bg-indigo-600 transition-all flex items-center justify-center w-24"
          disabled={loading}
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Search"
          )}
        </button>
      </div>
    </div>
  );
}