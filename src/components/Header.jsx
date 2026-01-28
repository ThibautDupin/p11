import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/LOGO-2.png" alt="Kasa" />
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/about" className="nav-link">À propos</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
