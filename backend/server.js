const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const movies = [
  { id: 1, title: "Inception", year: 2010, genre: "Science-Fiction", rating: 8.8 },
  { id: 2, title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 },
  { id: 3, title: "Interstellar", year: 2014, genre: "Science-Fiction", rating: 8.6 },
  { id: 4, title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9 },
  { id: 5, title: "The Matrix", year: 1999, genre: "Science-Fiction", rating: 8.7 },
];

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = movies.find((m) => m.id === id);

  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
});

app.post("/api/movies", (req, res) => {
  const { title, year, genre, rating } = req.body;

  if (!title || !year || !genre || typeof rating !== "number") {
    return res.status(400).json({
      message: "Invalid body. Required: title, year, genre, rating (number)",
    });
  }

  const newMovie = {
    id: movies.length ? Math.max(...movies.map((m) => m.id)) + 1 : 1,
    title,
    year: Number(year),
    genre,
    rating,
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});