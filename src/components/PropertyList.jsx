import './PropertyList.css'
import logements from '../data/logements.json'

function PropertyList() {
  return (
    <div className="property-list">
      {logements.map((logement) => (
        <div key={logement.id} className="property-card">
          <img src={logement.cover} alt={logement.title} />
          <h3>{logement.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default PropertyList
