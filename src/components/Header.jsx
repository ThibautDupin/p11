import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/LOGO-2.png" alt="Kasa" />
        </div>
        <nav className="nav">
          <a href="/" className="nav-link">Accueil</a>
          <a href="/about" className="nav-link">À propos</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
