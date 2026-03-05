export default function MovieList({ movies, selectedId, onSelect }) {
  return (
    <div style={{ width: 320 }}>
      <h2>Films</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {movies.map((m) => (
          <li key={m.id} style={{ marginBottom: 8 }}>
            <button
              onClick={() => onSelect(m.id)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: 10,
                borderRadius: 8,
                border: "1px solid #ddd",
                background: selectedId === m.id ? "#f2f2f2" : "white",
                cursor: "pointer",
              }}
            >
              <div style={{ fontWeight: 700 }}>{m.title}</div>
              <div style={{ fontSize: 12, opacity: 0.8 }}>
                {m.year} • {m.genre} • ⭐ {m.rating}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}