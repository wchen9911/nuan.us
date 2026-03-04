import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">nuan.us</h1>
      </header>

      <main className="hero">
        <h2 className="tagline">暖 — Find warmth in the simple.</h2>
        <p className="description">
          A minimalist space dedicated to the subtle light of quiet moments, 
          the comfort of soft days, and the essence of inner peace.
        </p>
        <div className="cta-container">
          <a href="#" className="cta">The Warmth Experience</a>
          <a href="#" className="secondary-cta">Explore Minimal</a>
        </div>
      </main>

      <section className="features">
        <div className="feature">
          <h3>Simplicity</h3>
          <p>The beauty of the essential, stripped of noise.</p>
        </div>
        <div className="feature">
          <h3>Quietude</h3>
          <p>Finding stillness in a busy world.</p>
        </div>
        <div className="feature">
          <h3>Comfort</h3>
          <p>The gentle embrace of things done well.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 nuan.us | A study in minimalism.</p>
      </footer>
    </div>
  )
}

export default App
