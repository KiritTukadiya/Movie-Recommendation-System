import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Brand */}
      <div className="footer-brand">

        <div className="footer-logo">

          <span className="footer-logo-icon">
            ▶
          </span>

          <span>
            Movie<span>Rec</span>
          </span>

        </div>

        <p>
          Your intelligent movie recommendation
          system powered by machine learning.
        </p>

        <p className="copyright">
          © 2026 MovieRec. All rights reserved.
        </p>

      </div>

      {/* Navigation */}
      <div className="footer-column">

        <h3>Navigation</h3>

        <a href="/home">Home</a>
        <a href="/search">Search</a>
        <a href="/recommendations">
          Recommendations
        </a>
        <a href="/about">About</a>

      </div>

      {/* Movie Picks */}
      <div className="footer-column">

        <h3>Movie Picks</h3>

        <span>Popular</span>
        <span>Trending</span>
        <span>Top Rated</span>

      </div>

    </footer>
  );
}

export default Footer;