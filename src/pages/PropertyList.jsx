import { Link } from 'react-router-dom'
import './PropertyList.css'
import logements from '../data/logements.json'

function PropertyList() {
  return (
    // Conteneur de toutes les cartes logements
    <div className="property-list">
      {/* On parcourt la liste des logements */}
      {logements.map((logement) => (
        // Chaque carte est un lien vers la page de détail
        <Link
          key={logement.id}
          className="property-card"
          to={`/property/${logement.id}`}
        >
          {/* Image principale du logement */}
          <img src={logement.cover} alt={logement.title} />
          {/* Titre du logement */}
          <h3>{logement.title}</h3>
        </Link>
      ))}
    </div>
  )
}

export default PropertyList
