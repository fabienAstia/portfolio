import './AboutMe.css'
import photo_me from '../../assets/photos/photo_fabien.png'
import address from '../../assets/pictos/home_address.svg'
import formation from '../../assets/pictos/formation.svg'
import company from '../../assets/pictos/company.svg'
import email from '../../assets/pictos/email.svg'
import github from '../../assets/pictos/github.svg'
import linkedin from '../../assets/pictos/linkedin.svg'

export default function AboutMe(){
    return(
        <>
         <h1>À propos de moi</h1>
            <div className='row row-cols-1 row-cols-lg-2'>
                <div className='col description'>
                    <h4 className='text-center'>Développeur fullStack/back-end</h4>
                    <p className='fs-5'>Ancien professeur reconverti en développeur Java back-end, 
                        je suis diplômé du titre de <strong>Concepteur Développeur d’Applications (bac+3)</strong>.
                    </p>
                    <p className='fs-5'>Après 18 mois d’alternance à la Société Générale, 
                        je souhaite poursuivre dans le développement <strong>fullStack</strong> ou <strong>back-end</strong>, 
                        où je peux allier rigueur, logique et travail d’équipe.
                    </p>
                </div>
                <div className='col photo-et-infos'>
                    <div className='row row-cols-1 row-cols-lg-2 align-items-center h-100'>
                        <div className='col photo-wrapper justify-content-center d-flex align-items-center'>
                            <img src={photo_me} id='photo' alt='photo de profil'/>
                        </div>
                        <div className='col justify-content-center d-flex'>
                            <div className='contact-info'>
                                <p>
                                    <img src={address} alt="adresse" className='icon'/>
                                    <span>75020 PARIS</span>
                                </p>
                                <p>
                                    <img src={formation} alt="diplôme" className='icon' />
                                    <a href='' target='_blank'>CDA-Simplon(2024/2025)</a>
                                </p>
                                <p>
                                    <img src={company} alt="expérience" className='icon'/>
                                    <span>Société Générale-Backend</span>
                                </p>
                                <p>
                                    <img src={email} alt="email" className='icon'/>
                                    <a href='mailto:fabien.astiasaran@gmail.com'>fabien.astiasaran@gmail.com</a>
                                </p>
                                <p>
                                    <img src={github} alt="lien github" className='icon'/>
                                    <a href="https://github.com/fabienAstia" target='_blank'>GitHub</a>
                                </p>
                                <p>
                                    <img src={linkedin} alt="lien linkedin" className='icon'/>
                                    <a href="https://www.linkedin.com/in/fabien-astiasaran" target='_blank'>Linkedin</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 