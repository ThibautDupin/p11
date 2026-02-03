import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/LOGO-2.png" alt="Kasa" />
        </div>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
