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
            className='add-wishlist-button' 
            onClick={() => handleAddToWishlist(name)}>Add to Wishlist
          </button>

          <form onSubmit={() => handleCreateJournal(name)}>
            <button className='make-journal-button'>Make a Journal</button>
          </form>
        </div>
    </div>
  )
}