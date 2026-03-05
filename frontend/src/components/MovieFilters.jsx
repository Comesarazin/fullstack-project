export default function MovieFilters({ filters, onChange }) {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
      <input
        placeholder="Recherche titre..."
        value={filters.search}
        onChange={(e) => onChange({ ...filters, search: e.target.value })}
      />

      <select
        value={filters.genre}
        onChange={(e) => onChange({ ...filters, genre: e.target.value })}
      >
        <option value="">Tous genres</option>
        <option value="Science-Fiction">Science-Fiction</option>
        <option value="Action">Action</option>
        <option value="Crime">Crime</option>
      </select>

      <select
        value={filters.sort}
        onChange={(e) => onChange({ ...filters, sort: e.target.value })}
      >
        <option value="">Tri</option>
        <option value="rating_desc">Note ↓</option>
        <option value="rating_asc">Note ↑</option>
        <option value="year_desc">Année ↓</option>
        <option value="year_asc">Année ↑</option>
      </select>
    </div>
  );
}