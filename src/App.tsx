/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <>
      {/* TOP BREAKING NEWS */}
      <div className="top-breaking">
        <span>BREAKING NEWS</span>
        <div className="marquee-container">
          <div className="marquee-content">
            राजस्थान में नई विकास योजनाओं की घोषणा | Ground Report from Rural Rajasthan | Youth Voice Rising | जन जन की आवाज़ डिजिटल मीडिया
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="logo-section">
          <img src="/logo.png" alt="Jan Jan Ki Awaaz Logo" />
          <div>
            <h1>Jan Jan Ki Awaaz</h1>
            <p>आवाज़ आम जनता की</p>
          </div>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search News..." />
          <button><i className="fas fa-search"></i></button>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="navbar" id="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Breaking</a></li>
          <li><a href="#">Politics</a></li>
          <li><a href="#">Rajasthan</a></li>
          <li><a href="#">Government</a></li>
          <li><a href="#">Public Voice</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-slider">
          <img src="https://picsum.photos/1200/500?random=cover" alt="Cover Banner" />

          <div className="hero-overlay">
            <span className="live-tag">LIVE</span>
            <h2>सच ज़मीन से, खबर आपकी</h2>
            <p>Rajasthan Ground Reporting & Public Journalism</p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="container">

        {/* LEFT CONTENT */}
        <main className="main-content">

          {/* TRENDING */}
          <section className="news-section">
            <div className="section-title">
              <h2>🔥 Trending News</h2>
            </div>

            <div className="news-grid">
              <div className="news-card">
                <img src="https://picsum.photos/500/300?1" alt="News 1" />
                <div className="news-content">
                  <span>Politics</span>
                  <h3>राजस्थान राजनीति में बड़ा बदलाव</h3>
                  <p>Ground report और public reactions तेजी से वायरल हो रहे हैं।</p>
                </div>
              </div>

              <div className="news-card">
                <img src="https://picsum.photos/500/300?2" alt="News 2" />
                <div className="news-content">
                  <span>Public Voice</span>
                  <h3>Youth demanding better rural facilities</h3>
                  <p>Rajasthan villages raising important development issues.</p>
                </div>
              </div>

              <div className="news-card">
                <img src="https://picsum.photos/500/300?3" alt="News 3" />
                <div className="news-content">
                  <span>Breaking</span>
                  <h3>सरकारी योजना पर जनता की राय</h3>
                  <p>Ground level investigation by Jan Jan Ki Awaaz reporters.</p>
                </div>
              </div>
            </div>
          </section>

          {/* RAJASTHAN NEWS */}
          <section className="news-section">
            <div className="section-title">
              <h2>📍 Rajasthan News</h2>
            </div>

            <div className="news-grid">
              <div className="news-card">
                <img src="https://picsum.photos/500/300?4" alt="News 4" />
                <div className="news-content">
                  <span>Rajasthan</span>
                  <h3>ग्रामीण विकास योजनाओं की पड़ताल</h3>
                  <p>जन जन की आवाज़ टीम ने गांवों से ground report तैयार की।</p>
                </div>
              </div>

              <div className="news-card">
                <img src="https://picsum.photos/500/300?5" alt="News 5" />
                <div className="news-content">
                  <span>Local</span>
                  <h3>Local citizens raise infrastructure issues</h3>
                  <p>Road, water and electricity remain key concerns.</p>
                </div>
              </div>
            </div>
          </section>

          {/* VIDEO SECTION */}
          <section className="news-section">
            <div className="section-title">
              <h2>🎥 Video News</h2>
            </div>

            <div className="video-grid">
              <div className="video-card">
                <img src="https://picsum.photos/500/300?6" alt="Video 1" />
                <i className="fas fa-play"></i>
                <h4>Ground Report from Rajasthan Village</h4>
              </div>

              <div className="video-card">
                <img src="https://picsum.photos/500/300?7" alt="Video 2" />
                <i className="fas fa-play"></i>
                <h4>Political Interview Special</h4>
              </div>
            </div>
          </section>

          {/* LATEST ARTICLES */}
          <section className="news-section">
            <div className="section-title">
              <h2>📰 Latest Articles</h2>
            </div>

            <div className="article-list">
              <article>
                <img src="https://picsum.photos/250/150?8" alt="Article 1" />
                <div>
                  <h3>सरकार की नई योजना पर विशेष रिपोर्ट</h3>
                  <p>Transparency और public impact पर detailed coverage.</p>
                </div>
              </article>

              <article>
                <img src="https://picsum.photos/250/150?9" alt="Article 2" />
                <div>
                  <h3>Rajasthan youth voices growing online</h3>
                  <p>Digital journalism changing local reporting trends.</p>
                </div>
              </article>
            </div>
          </section>

        </main>

        {/* SIDEBAR */}
        <aside className="sidebar">

          <div className="sidebar-box">
            <h3>📈 Trending Posts</h3>

            <div className="side-post">
              <img src="https://picsum.photos/100/70?10" alt="Trending 1" />
              <p>Breaking political news updates from Jaipur</p>
            </div>

            <div className="side-post">
              <img src="https://picsum.photos/100/70?11" alt="Trending 2" />
              <p>Public voice campaign getting massive support</p>
            </div>
          </div>

          <div className="sidebar-box">
            <h3>🎤 Reporter Highlights</h3>

            <p>✔ Ground Reporting</p>
            <p>✔ Rural Development Coverage</p>
            <p>✔ Political Journalism</p>
            <p>✔ Public Issues Investigation</p>
          </div>

          <div className="sidebar-box social-box">
            <h3>📲 Follow Us</h3>

            <a href="https://www.instagram.com/janjankiawaazofficial?igsh=N21jNTJ4cXIydHN2" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>

            <a href="https://www.facebook.com/share/18ZcxTEABz/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>

            <a href="#">
              <i className="fab fa-youtube"></i> YouTube
            </a>
          </div>

        </aside>

      </div>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <h2>Subscribe For Latest Updates</h2>
        <p>Get breaking news alerts directly on your device.</p>

        <div className="newsletter-box">
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>Jan Jan Ki Awaaz</h3>
            <p>
              Rajasthan based independent digital media platform focused on public voice and ground journalism.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Politics</li>
              <li>Breaking News</li>
              <li>Videos</li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <p><i className="fas fa-user"></i> Prashant Rajpurohit</p>
            <p><i className="fas fa-phone"></i> +91 9636095345</p>
            <p><i className="fas fa-envelope"></i> prashantbirawas@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Jan Jan Ki Awaaz | आवाज़ आम जनता की
        </div>
      </footer>
    </>
  );
}
