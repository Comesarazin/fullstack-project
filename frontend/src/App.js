import { useEffect, useMemo, useState } from "react";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import MovieFilters from "./components/MovieFilters";
import { getMovieById, getMovies } from "./services/moviesApi";

export default function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    genre: "",
    sort: "",
  });

  const [details, setDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState("");

  useEffect(() => {
    getMovies()
      .then(setAllMovies)
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    if (!selectedId) {
      setDetails(null);
      setDetailsError("");
      return;
    }

    setDetailsLoading(true);
    setDetailsError("");

    getMovieById(selectedId)
      .then(setDetails)
      .catch(() => setDetailsError("Film introuvable."))
      .finally(() => setDetailsLoading(false));
  }, [selectedId]);

  // Filtrage côté front
  const filteredMovies = useMemo(() => {
    let list = [...allMovies];

    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      list = list.filter((m) => m.title.toLowerCase().includes(q));
    }

    if (filters.genre) {
      list = list.filter((m) => m.genre === filters.genre);
    }

    if (filters.sort === "rating_desc") list.sort((a, b) => b.rating - a.rating);
    if (filters.sort === "rating_asc") list.sort((a, b) => a.rating - b.rating);
    if (filters.sort === "year_desc") list.sort((a, b) => b.year - a.year);
    if (filters.sort === "year_asc") list.sort((a, b) => a.year - b.year);

    return list;
  }, [allMovies, filters]);

  return (
    <div style={{ padding: 20, fontFamily: "system-ui" }}>
      <h1>Movie App</h1>

      <MovieFilters filters={filters} onChange={setFilters} />

      <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
        <MovieList movies={filteredMovies} selectedId={selectedId} onSelect={setSelectedId} />
        <MovieDetails movie={details} loading={detailsLoading} error={detailsError} />
      </div>
    </div>
  );
}