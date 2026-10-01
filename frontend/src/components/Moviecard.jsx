import "../css/MovieCard.css";

function MovieCard({
  title,
  year,
  image,
  rating,
  genre
}) {

  return (
    <div className="movie-card">

      {/* POSTER */}

      <div className="movie-poster-wrapper">

        <img
          src={image}
          alt={title}
          className="movie-poster"
        />

        <div className="movie-rating">
          ⭐ {rating}
        </div>

      </div>

      {/* MOVIE INFO */}

      <div className="movie-info">

        <h3>{title}</h3>

        <p className="movie-year">
          {year}
        </p>

        <div className="movie-genres">

          {genre.map((item) => (
            <span
              className="genre-tag"
              key={item}
            >
              {item}
            </span>
          ))}

        </div>

        <button className="details-btn">
          View Details
        </button>

      </div>

    </div>
  );
}

export default MovieCard;