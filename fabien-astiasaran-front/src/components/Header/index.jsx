import './Header.css'
import {NavLink, Link} from 'react-router-dom';

export default function Header(){
    return (
    <header className="header">
        <nav className="navbar navbar-expand-md bg-dark sticky-top" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/" className='navbar-brand'>À propos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/projects" className='nav-link'>Projets</NavLink>
                        <NavLink to="/skills" className='nav-link'>Compétences</NavLink>
                        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    ) 
}