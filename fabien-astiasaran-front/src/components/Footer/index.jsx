import './Footer.css'
import LegalNotice from '../../views/LegalNoticeView';

export default function Footer(){
    return (
        <footer className='footer'>
            <div className='footerWrapper nav navbar bg-dark' data-bs-theme="dark">
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='d-flex w-100 justify-content-center align-items-center'>
                        <span className='nav-link'>
                            © 2025 Portfolio
                        </span>
                        <div className='nav-link pointer text-center'>
                            <a href="/legalNotice">Mentions légales</a>
                        </div>
                        <div className='nav-link pointer text-center'>
                            <a href="/privacyPolicy">Politique de confidentialité</a>
                        </div>
                    </div>
                 
                </div>

            </div>
        </footer>
    );
}