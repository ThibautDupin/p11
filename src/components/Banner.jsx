import './Banner.css'

function Banner({ image = '/images/banniere.png', text = 'Chez vous, partout et ailleurs' }) {
  return (
    <div className="banner" style={{ backgroundImage: `url('${image}')` }}>
      <div className="banner__overlay"></div>
      {text ? <h1 className="banner__text">{text}</h1> : null}
    </div>
  )
}

export default Banner
