import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer(){
    function scrollToTop(){
        setTimeout(() =>{
            window.scrollTo(0, 0);
        }, 50);
    }
    return (
        <footer className='footerWrapper nav navbar bg-dark text-light' data-bs-theme="dark">
            <div className='d-flex container justify-content-center align-items-center gap-2'>
                <span className='footerElement'>© 2025 Portfolio</span>
                <Link to='/' onClick={scrollToTop} className='nav-link pointer text-center footerElement'>Accueil</Link>
                <Link to="legalNotice" onClick={scrollToTop} className='nav-link pointer text-center footerElement'>Mentions légales</Link>
                <Link to="privacyPolicy" onClick={scrollToTop} className='nav-link pointer text-center footerElement'>Politique de confidentialité</Link>
            </div>
        </footer>
    );
}