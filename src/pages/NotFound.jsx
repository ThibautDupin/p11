import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
  <p>Oups ! La page que vous demandez n'existe pas.</p>
  <Link to="/" className="not-found__link">Retourner à l’accueil</Link>
    </main>
  )
}

export default NotFound
