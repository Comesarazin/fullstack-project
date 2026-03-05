export default function MovieDetails({ movie, loading, error }) {
  return (
    <div style={{ flex: 1 }}>
      <h2>Détails</h2>

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {!loading && !error && !movie && <p>Sélectionne un film.</p>}

      {movie && (
        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>{movie.title}</h3>
          <p><b>Année:</b> {movie.year}</p>
          <p><b>Genre:</b> {movie.genre}</p>
          <p><b>Note:</b> ⭐ {movie.rating}</p>
          <p><b>ID:</b> {movie.id}</p>
        </div>
      )}
    </div>
  );
}