import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer(){
    return (
        <footer className='footerWrapper nav navbar bg-dark text-light' data-bs-theme="dark">
            <div className='d-flex container justify-content-center align-items-center gap-2'>
                <span className='footerElement'>© 2025 Portfolio</span>
                <Link to='/' className='nav-link pointer text-center footerElement'>Accueil</Link>
                <Link to="legalNotice" className='nav-link pointer text-center footerElement'>Mentions légales</Link>
                <Link to="privacyPolicy" className='nav-link pointer text-center footerElement'>Politique de confidentialité</Link>
            </div>
        </footer>
    );
}