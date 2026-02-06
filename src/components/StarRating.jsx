import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './StarRating.css'

// Déclaration du composant avec ses props
// Rating : note à afficher
// Max : note maximale (par défaut 5)
// ClassName : classes CSS supplémentaires pour le style
// => dans property Detail je passe la classe "property-details__rating"

function StarRating({ rating, max = 5, className = '' }) {

    // Math.max récupère la plus grande valeur entre 1 et la valeur passée en second argument
    // le || sert à fournir une valeur par défaut de 0 si rating n'est pas un nombre valide
    // Le max est utilisé pour s'assurer que la note ne dépasse pas la note maximale (par défaut 5)
  const normalizedRating = Math.max(1, Math.min(max, Number(rating) || 0))


  const classes = className ? `star-rating ${className}` : 'star-rating'
// On construit la chaîne de classes CSS en fonction de la présence ou non de className

  return (
    <div className={classes} aria-label={`Note ${normalizedRating} sur ${max}`}>
      {[...Array(max)].map((_, index) => (
        // On crée un tableau de la taille max et on boucle dessus pour afficher les étoiles
        // Si l'index est inférieur à la note, on ajoute la classe pour étoile remplie
        // Exemple: Pour un rating de 3, les étoiles aux index 0, 1 et 2 seront remplies
        <span
          key={index}
          className={
            index < normalizedRating
              ? 'star-rating__star star-rating__star--filled'
              : 'star-rating__star'
          }
        >
          <FontAwesomeIcon icon={faStar} />
        </span>
      ))}
    </div>
  )
}

export default StarRating
