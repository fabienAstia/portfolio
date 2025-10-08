import './Header.css'
import {NavLink, Link} from 'react-router-dom';

export default function Header({goTo}){
    return (
    <header className="header">
        <nav className="navbar navbar-expand-md bg-dark sticky-top" data-bs-theme="dark">
            <div className="container-fluid">
                <button className='navbar-brand' onClick={() => goTo(introView)}>À propos</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button className='nav-link' onClick={() => goTo(projectsView)}>Projets</button>
                        <button className='nav-link' onClick={() => goTo(skillsView)}>Compétences</button>
                        <button className='nav-link' onClick={() => goTo(contactView)}>Contact</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    ) 
}
