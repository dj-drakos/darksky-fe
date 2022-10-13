export default function AstroCard({ item, handleAddToWishlist, handleCreateJournal }) {
  const { name, gravity, radius, dimension, mass, vol, density, avgTemp, bodyType } = item
  return (
    <div className="astro-item" >
      <h2>{name}</h2>
        <p>object type: {bodyType}</p>
        { dimension 
        ? <p>dimension: {dimension} KM</p>
        : <p>radius: {radius} KM</p>
      }
        <p>gravity: {gravity} m.s<sup>-2</sup></p>
        { mass && <p>mass: {mass?.massValue}<sup>{mass?.massExponent}</sup> kg </p> }
        { vol && <p>volume: {vol?.volValue}<sup>{vol?.volExponent}</sup> km<sup>3</sup> </p> }
        <p>density: {density} g.cm<sup>3</sup> </p>
        <p>average temperature: {avgTemp} K</p>
        <div className='buttons'>
          <button 
            disabled={!handleAddToWishlist && true} 
            className='wishlist-button' 
            onClick={() => handleAddToWishlist(name)}>Add to Wishlist
          </button>
          <button className='make-journal-button' onClick={() => handleCreateJournal(name)}>Make a Journal
          </button>
        </div>
    </div>
  )
}