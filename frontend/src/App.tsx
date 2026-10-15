function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <span className="badge">KnowFlow</span>
        <h1>Enterprise knowledge, powered by AI.</h1>
        <p>
          A secure workspace for internal documents, instant answers, and trusted
          knowledge retrieval.
        </p>
        <div className="actions">
          <button type="button">Upload documents</button>
          <button type="button" className="secondary">
            Open workspace
          </button>
        </div>
      </section>

      <section className="grid">
        <article>
          <h2>Secure knowledge base</h2>
          <p>Organize internal documents and business context in one place.</p>
        </article>
        <article>
          <h2>AI-powered answers</h2>
          <p>Ground responses in trusted sources and citations.</p>
        </article>
        <article>
          <h2>Operational visibility</h2>
          <p>Track usage, confidence, and knowledge quality across the system.</p>
        </article>
      </section>
    </main>
  )
}

export default App
