import { Link } from 'react-router-dom'
import './PropertyList.css'
import logements from '../data/logements.json'

function PropertyList() {
  return (
    <div className="property-list">
      {logements.map((logement) => (
        <Link
          key={logement.id}
          className="property-card"
          to={`/property/${logement.id}`}
        >
          <img src={logement.cover} alt={logement.title} />
          <h3>{logement.title}</h3>
        </Link>
      ))}
    </div>
  )
}

export default PropertyList
