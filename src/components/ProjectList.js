export default function ProjectList({ projects }) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Selected Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map((project) => (
          <a key={project.name} href={project.html_url} target="_blank" rel="noopener noreferrer" className="card" style={{ display: 'block' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>{project.name}</h3>
            <p style={{ color: 'var(--gray-medium)', fontSize: '0.95rem', marginBottom: '1rem' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ 
                  fontSize: '0.75rem', 
                  background: 'var(--gray-light)', 
                  padding: '0.2rem 0.5rem', 
                  borderRadius: '4px',
                  color: 'var(--accent)'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
