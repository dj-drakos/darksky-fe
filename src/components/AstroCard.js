export default function AstroCard({ item, handleAddToWishlist, handleCreateJournal }) {
  const { name, gravity, discoveryDate, radius } = item
  return (
    <div className="astro-item" >
      <h2>{name}</h2>
        <p>gravity: {gravity}</p>
        <p>date discovered: {discoveryDate}</p>
        <p>radius: {radius} KM</p>
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