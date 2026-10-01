import { useMemo, useState } from "react";
import "../css/Search.css";

const movies = [
  {
    id: 1,
    title: "Oppenheimer",
    year: 2023,
    genre: "Drama",
    rating: 8.6,
    poster:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    id: 2,
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    rating: 8.6,
    poster:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    id: 3,
    title: "Deadpool & Wolverine",
    year: 2024,
    genre: "Action",
    rating: 8.0,
    poster:
      "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
  },
  {
    id: 4,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    poster:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 5,
    title: "The Matrix",
    year: 1999,
    genre: "Action",
    rating: 8.7,
    poster:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 6,
    title: "Joker",
    year: 2019,
    genre: "Drama",
    rating: 8.1,
    poster:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 7,
    title: "Barbie",
    year: 2023,
    genre: "Comedy",
    rating: 7.0,
    poster:
      "https://image.tmdb.org/t/p/w500/iuFNMin26KnpL2tLnc3W7Fz4fP7.jpg",
  },
  {
    id: 8,
    title: "Spider-Man",
    year: 2002,
    genre: "Action",
    rating: 7.3,
    poster:
      "https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOud2O6e.jpg",
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    rating: 8.2,
    poster:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 10,
    title: "The Batman",
    year: 2022,
    genre: "Action",
    rating: 7.7,
    poster:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 11,
    title: "Inside Out 2",
    year: 2024,
    genre: "Comedy",
    rating: 7.6,
    poster:
      "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
  },
  {
    id: 12,
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    genre: "Adventure",
    rating: 7.9,
    poster:
      "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
  },
  {
    id: 13,
    title: "Top Gun: Maverick",
    year: 2022,
    genre: "Action",
    rating: 8.2,
    poster:
      "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1i3QpW4.jpg",
  },
  {
    id: 14,
    title: "The Godfather",
    year: 1972,
    genre: "Drama",
    rating: 8.7,
    poster:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    id: 15,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.4,
    poster:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: 16,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 17,
    title: "Avatar: The Way of Water",
    year: 2022,
    genre: "Adventure",
    rating: 7.6,
    poster:
      "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },
  {
    id: 18,
    title: "John Wick: Chapter 4",
    year: 2023,
    genre: "Action",
    rating: 7.7,
    poster:
      "https://image.tmdb.org/t/p/w500/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
  },
];

const filters = [
  "All",
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "2020+",
  "8+",
  "9+",
  "7+",
];

function Search() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch =
        movie.title.toLowerCase().includes(search.toLowerCase()) ||
        movie.genre.toLowerCase().includes(search.toLowerCase());

      let matchesFilter = true;

      if (activeFilter === "All") {
        matchesFilter = true;
      } else if (
        ["Action", "Adventure", "Comedy", "Drama", "Sci-Fi"].includes(
          activeFilter
        )
      ) {
        matchesFilter = movie.genre === activeFilter;
      } else if (activeFilter === "2020+") {
        matchesFilter = movie.year >= 2020;
      } else if (activeFilter === "8+") {
        matchesFilter = movie.rating >= 8;
      } else if (activeFilter === "9+") {
        matchesFilter = movie.rating >= 9;
      } else if (activeFilter === "7+") {
        matchesFilter = movie.rating >= 7;
      }

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <div className="search-page">
      <div className="movie-wall"></div>

      <div className="search-overlay">
        <div className="search-container">

          <section className="search-hero">
            <p className="hero-small">MOVIE DISCOVERY</p>

            <h1>
              Discover what's <span>trending.</span>
            </h1>

            <p className="hero-description">
              Search through movies, explore genres and find something
              amazing to watch.
            </p>

            <div className="search-box">
              <span className="search-icon">⌕</span>

              <input
                type="text"
                placeholder="Search movies or genres..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  className="clear-search"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}
            </div>
          </section>

          <div className="filter-wrapper">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="results-header">
            <div>
              <h2>Trending Movies</h2>
              <p>{filteredMovies.length} movies found</p>
            </div>
          </div>

          {filteredMovies.length > 0 ? (
            <div className="movie-shelf">
              {filteredMovies.map((movie) => (
                <article className="movie-card" key={movie.id}>

                  <div className="poster-wrapper">

                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="movie-poster"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/500x750/111111/ffffff?text=No+Poster";
                      }}
                    />

                    <div className="poster-gradient"></div>

                    <div className="movie-rating">
                      ★ {movie.rating}
                    </div>

                    <button className="play-button">
                      ▶
                    </button>

                    <div className="hover-info">
                      <span>{movie.year}</span>
                      <span>{movie.genre}</span>
                    </div>

                  </div>

                  <div className="movie-info">
                    <h3>{movie.title}</h3>

                    <p>
                      {movie.year} • {movie.genre}
                    </p>
                  </div>

                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🎬</div>

              <h2>No movies found</h2>

              <p>
                Try another movie name or filter.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
              >
                Reset Search
              </button>
            </div>
          )}

          <div className="recommend-section">
            <h2>Not sure what to watch?</h2>

            <p>
              Let us help you discover your next favorite movie.
            </p>

            <button className="recommend-btn">
              Get Recommendation <span>→</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Search;