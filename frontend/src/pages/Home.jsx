import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/Moviecard";
import "../css/Home.css";

import inception from "../assets/inception.jpg";
import interstellar from "../assets/interstellar.jpg";
import darkKnight from "../assets/dark-knight.jpg";
import parasite from "../assets/parasite.jpg";
import oppenheimer from "../assets/oppenheimer.jpg";
import dune from "../assets/dune.jpg";

function Home() {

  const movies = [
    {
      title: "Inception",
      year: "2010",
      image: inception,
      rating: "8.8",
      genre: ["Sci-Fi", "Thriller"]
    },
    {
      title: "Interstellar",
      year: "2014",
      image: interstellar,
      rating: "8.6",
      genre: ["Sci-Fi", "Drama"]
    },
    {
      title: "The Dark Knight",
      year: "2008",
      image: darkKnight,
      rating: "9.0",
      genre: ["Action", "Crime"]
    },
    {
      title: "Parasite",
      year: "2019",
      image: parasite,
      rating: "8.5",
      genre: ["Thriller", "Drama"]
    },
    {
      title: "Oppenheimer",
      year: "2023",
      image: oppenheimer,
      rating: "8.3",
      genre: ["Biography", "Drama"]
    },
    {
      title: "Dune: Part Two",
      year: "2024",
      image: dune,
      rating: "8.6",
      genre: ["Sci-Fi", "Adventure"]
    }
  ];

  return (
    <div className="home-page">

      <Navbar />

      {/* =========================
          HERO SECTION
      ========================= */}

      <main className="home-hero">

        <div className="hero-background"></div>

        <div className="hero-content">

          <div className="hero-badge">
            <span>✦</span>
            <span>ML-Powered</span>

            <span className="badge-dot">•</span>

            <span>1.5B+ Movies</span>

            <span className="badge-dot">•</span>

            <span>Genre Similarity</span>
          </div>

          <h1>
            Discover Your
            <br />
            <span>Next Favorite</span>
            <br />
            Movie
          </h1>

          <p className="hero-description">
            Find movies similar to the ones you already love —
            powered by machine learning that understands genre,
            story, cast, and director.
          </p>

          <div className="hero-search">

            <div className="search-box">

              <span className="search-icon">
                🔍
              </span>

              <input
                type="text"
                placeholder="Try 'Inception', 'Avengers', 'Interstellar'..."
              />

            </div>

            <button className="hero-search-btn">
              🔍 Search
            </button>

          </div>

          <p className="search-hint">
            Press Enter or click Search to explore movies
          </p>

        </div>

      </main>

      {/* =========================
          POPULAR MOVIES
      ========================= */}

      <section className="popular-movies">

        <div className="popular-header">

          <div>
            <h2>Popular Movies</h2>

            <p>
              Select any movie to get similar recommendations
            </p>
          </div>

          <button className="view-all-btn">
            View all →
          </button>

        </div>

        <div className="movie-grid">

          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              title={movie.title}
              year={movie.year}
              image={movie.image}
              rating={movie.rating}
              genre={movie.genre}
            />
          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Home;