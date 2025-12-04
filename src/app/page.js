import Hero from '@/components/Hero'
import ProjectList from '@/components/ProjectList'
import Contributions from '@/components/Contributions'
import { getProfile, getProjects } from '@/lib/github'

export default async function Home() {
  const profile = await getProfile()
  const projects = await getProjects()

  return (
    <>
      <Hero profile={profile} />
      <ProjectList projects={projects} />
      <Contributions />
      
      <section id="contact" className="section">
        <h2 className="section-title">Get in Touch</h2>
        <p style={{ color: 'var(--gray-medium)', marginBottom: '1rem' }}>
          Feel free to reach out if you want to collaborate or just say hi.
        </p>
        <a href={`mailto:roshanlimbu@example.com`} style={{ textDecoration: 'underline', fontWeight: '500' }}>
          Email Me
        </a>
      </section>
    </>
  )
}
