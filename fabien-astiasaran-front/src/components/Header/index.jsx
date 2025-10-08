import './Header.css'
export default function Header({goTo, refs}){
    return (
    <header className="header">
        <nav className="navbar navbar-expand-md bg-dark sticky-top" data-bs-theme="dark">
            <div className="container-fluid">
                <a className='navbar-brand'  onClick={(e) => {e.preventDefault(); goTo(refs.introRef)}}>À propos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className='nav-link'  onClick={() => goTo(refs.projectRef)}>Projets</a>
                        <a className='nav-link'  onClick={() => goTo(refs.skillsRef)}>Compétences</a>
                        <a className='nav-link'  onClick={() => goTo(refs.contactRef)}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    ) 
}
