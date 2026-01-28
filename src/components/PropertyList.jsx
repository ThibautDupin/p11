import './PropertyList.css'
import logements from '../data/logements.json'

function PropertyList({ onSelect }) {
  return (
    <div className="property-list">
      {logements.map((logement) => (
        <button
          key={logement.id}
          className="property-card"
          type="button"
          onClick={() => onSelect?.(logement)}
        >
          <img src={logement.cover} alt={logement.title} />
          <h3>{logement.title}</h3>
        </button>
      ))}
    </div>
  )
}

export default PropertyList
