import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Carousel.css'

function Carousel({ images = [], title }) {
  // Index de l'image actuellement affichée dans le carrousel
  const [currentIndex, setCurrentIndex] = useState(0)
  // Affiche les contrôles uniquement si plusieurs images sont disponibles
  const hasMultiple = images.length > 1

  // Si aucune image n'est fournie, on ne rend rien
  if (images.length === 0) {
    return null
  }

  // Passe à l'image précédente (boucle en fin de liste)
  const goToPrevious = () => {
    setCurrentIndex((index) => (index - 1 + images.length) % images.length)
  }

  // Passe à l'image suivante (boucle en début de liste)
  const goToNext = () => {
    setCurrentIndex((index) => (index + 1) % images.length)
  }

  return (
    <div className="carousel">
      {/* Image active */}
      <img
        src={images[currentIndex]}
        alt={title}
        className="carousel__image"
      />
      {hasMultiple && (
        <>
          {/* Bouton précédent */}
          <button
            type="button"
            className="carousel__control carousel__control--prev"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {/* Bouton suivant */}
          <button
            type="button"
            className="carousel__control carousel__control--next"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          {/* Compteur (ex: 2/5) */}
          <div className="carousel__counter">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
