import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import NotFound from '../pages/NotFound'
import Carousel from './Carousel'
import Dropdown from './Dropdown'
import StarRating from './StarRating'
import './PropertyDetails.css'

function PropertyDetails() {
  // Récupère l'identifiant de la property depuis l'URL (route /property/:id)
  // Car :id indique un parametre dynamique
  // Pour /property/123, id vaudra "123"
  const { id } = useParams()
  // Cherche le logement correspondant dans la liste locale, mémorisé par id
  // [id] est une dépendance qui indique à useMemo de recalculer la valeur si id change
  // L'utilisation de useMemo permet d'optimiser les performances en évitant des recherches inutiles
  const property = useMemo(() => logements.find((item) => item.id === id), [id])

  // Si l'id n'existe pas, on affiche la page 404
  if (!property) {
    return <NotFound />
  }

  // On déstructure l'objet pour garder un JSX lisible et éviter property.xxx partout
  const {
    title,
    cover,
    pictures,
    location,
    description,
    host,
    rating,
    tags,
    equipments,
  } = property

  return (
    <section className="property-details">
      {/* Carrousel des images du logement */}
      <div className="property-details__hero">
        <Carousel images={pictures ?? [cover]} title={title} />
      </div>

      <div className="property-details__header">
        <div className="property-details__title">
          {/* Titre + localisation du logement */}
          <h2>{title}</h2>
          <p className="property-details__location">{location}</p>
          {/* Tags associés au logement (quartier, type, etc.) */}
          <div className="property-details__tags">
            {tags?.map((tag) => (
              <span key={tag} className="property-details__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="property-details__host">
          {/* Informations sur l'hôte + photo */}
          <div className="property-details__host-info">
            <div className="property-details__host-name">
              <span>{host?.name?.split(' ')[0]}</span>
              <span>{host?.name?.split(' ').slice(1).join(' ')}</span>
            </div>
            {host?.picture && (
              <img src={host.picture} alt={host.name} />
            )}
          </div>
          {/* Note du logement sous forme d'étoiles */}
          <StarRating rating={rating} className="property-details__rating" />
        </div>
      </div>

      <div className="property-details__content">
        {/* Description dans un dropdown réutilisable */}
        <Dropdown title="Description">
          <p>{description}</p>
        </Dropdown>
        {/* Liste des équipements dans un dropdown réutilisable */}
        <Dropdown title="Équipements">
          <ul>
            {equipments?.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </section>
  )
}

export default PropertyDetails
