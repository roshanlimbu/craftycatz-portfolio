import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Roshan Limbu | Portfolio',
  description: 'Minimalist portfolio of Roshan Limbu, showcasing projects and skills.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="container">
          <header className="header">
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Roshan Limbu</div>
            <nav className="nav-links">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>
          <main>{children}</main>
          <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border)', color: 'var(--gray-medium)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Roshan Limbu. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  )
}
