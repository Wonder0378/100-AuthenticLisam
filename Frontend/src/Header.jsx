import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return ( 
        <div>
            <nav className="NavHeader">
                <Link to="/">Lisam</Link>{" "}
                <Link to="/Courses">Courses</Link>
                <Link to="/Resources">Resources</Link>
            </nav>
        </div>
    )
}

export default Header;