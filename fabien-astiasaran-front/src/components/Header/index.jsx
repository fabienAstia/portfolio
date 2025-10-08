import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header(){
    
    const location = useLocation();
    const navigate = useNavigate();

    function handleScroll(e, id){
        e.preventDefault();
        if ('/' === location.pathname) {
            document.getElementById(id).scrollIntoView({behavior:'smooth'})
        }else {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id).scrollIntoView({behavior:'smooth'})
            }, 100)
        }
    }
    return (
    <header className="header">
        <nav className="navbar navbar-expand-md bg-dark sticky-top" data-bs-theme="dark">
            <div className="container-fluid">
                <div className='navbar-nav' >
                    <a className='nav-link' href='#intro'
                        onClick={(e) => handleScroll(e, 'intro')}>
                        À propos
                    </a>
                </div>
             
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" href="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className='nav-link' href='#projets'
                            onClick={(e) => handleScroll(e, 'projets')}>
                            Projets
                        </a>
                        <a className='nav-link' href='#skills'
                            onClick={(e) => handleScroll(e, 'skills')}>
                            Compétences
                        </a>
                        <a className='nav-link' href='#contact'
                            onClick={(e) => handleScroll(e, 'contact')}>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    ) 
}
