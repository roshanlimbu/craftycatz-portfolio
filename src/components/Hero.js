export default function Hero({ profile }) {
  return (
    <section id="about" className="section">
      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
        Hello, I'm {profile.name}.
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--gray-medium)', maxWidth: '600px', marginBottom: '2rem' }}>
        {profile.bio}
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="button">
          GitHub
        </a>
        <a href="#contact" className="button" style={{ background: 'var(--gray-light)', color: 'var(--foreground)' }}>
          Contact
        </a>
      </div>
    </section>
  )
}
