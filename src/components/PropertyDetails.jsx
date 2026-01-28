import './PropertyDetails.css'

function PropertyDetails({ property }) {
  if (!property) {
    return null
  }

  const {
    title,
    cover,
    location,
    description,
    host,
    rating,
    tags,
    equipments,
  } = property

  const normalizedRating = Math.max(0, Math.min(5, Number(rating) || 0))
  const stars = Array.from({ length: 5 }, (_, index) => index < normalizedRating)

  return (
    <section className="property-details">
      <div className="property-details__hero">
        <img src={cover} alt={title} />
      </div>

      <div className="property-details__header">
        <div className="property-details__title">
          <h2>{title}</h2>
          <p className="property-details__location">{location}</p>
          <div className="property-details__tags">
            {tags?.map((tag) => (
              <span key={tag} className="property-details__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="property-details__host">
          <div className="property-details__host-info">
            <span>{host?.name}</span>
            {host?.picture && (
              <img src={host.picture} alt={host.name} />
            )}
          </div>
          <div
            className="property-details__rating"
            aria-label={`Note ${normalizedRating} sur 5`}
          >
            {stars.map((isFilled, index) => (
              <span
                key={`${property.id}-star-${index}`}
                className={
                  isFilled
                    ? 'property-details__star property-details__star--filled'
                    : 'property-details__star'
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="property-details__content">
        <details className="property-details__dropdown">
          <summary className="property-details__summary">Description</summary>
          <div className="property-details__panel">
            <p>{description}</p>
          </div>
        </details>
        <details className="property-details__dropdown">
          <summary className="property-details__summary">Équipements</summary>
          <div className="property-details__panel">
            <ul>
              {equipments?.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </section>
  )
}

export default PropertyDetails
