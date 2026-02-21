import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return ( 
        <div>
            <nav className="NavHeader">
                <Link to="/">Lisam</Link>{" "}
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/turn-in">Turn In</Link>
            </nav>
        </div>
    )
}

export default Header;