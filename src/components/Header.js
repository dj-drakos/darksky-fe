import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <NavLink to="/main">Home</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
        </div>
    )
}
