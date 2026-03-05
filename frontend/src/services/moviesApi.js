const API_BASE_URL = "http://localhost:5001/api";

export async function getMovies() {
  const res = await fetch(`${API_BASE_URL}/movies`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}

export async function getMovieById(id) {
  const res = await fetch(`${API_BASE_URL}/movies/${id}`);
  if (!res.ok) throw new Error("Movie not found");
  return res.json();
}

export async function createMovie(movie) {
  const res = await fetch(`${API_BASE_URL}/movies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });
  if (!res.ok) throw new Error("Failed to create movie");
  return res.json();
}