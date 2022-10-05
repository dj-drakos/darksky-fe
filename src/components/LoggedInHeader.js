import { NavLink } from 'react-router-dom';

export default function Header({clearToken}) {
    return (
        <div className="header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/astro">Search</NavLink>
            <NavLink to="/wishlist">Wishlist</NavLink>
            <NavLink to="/journal">Journal</NavLink>
            <NavLink to="/" onClick={clearToken}>Log Out</NavLink>
        </div>
    )
}
