import { NavLink } from 'react-router-dom';

export default function Header({logout}) {
    return (
        <div className="header">
            <NavLink to="/main">Home</NavLink>
            <NavLink to="/astro-list">Search</NavLink>
            <NavLink to="/wishlist">Wishlist</NavLink>
            <NavLink to="/journal">Journal</NavLink>
            <NavLink to="/" onClick={logout}>Log Out</NavLink>
        </div>
    )
}
