import { Link } from "react-router-dom"
import '../css/NavBar.css';
function NavBar() {
    return (
        <nav className="nav">
            <h1 className="nav-title"><Link to="/">Movie App</Link></h1>
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/favorites">Favorites</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar