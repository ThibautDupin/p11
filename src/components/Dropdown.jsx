import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './Dropdown.css'

function Dropdown({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={isOpen ? 'dropdown is-open' : 'dropdown'}>
      <button
        className="dropdown__summary"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{title}</span>
        <FontAwesomeIcon icon={faChevronUp} className="dropdown__chevron" />
      </button>
      <div className="dropdown__panel">{children}</div>
    </div>
  )
}

export default Dropdown
