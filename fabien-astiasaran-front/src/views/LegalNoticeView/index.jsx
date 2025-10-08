import './LegalNotice.css'

export default function LegalNotice(){
    return (
        <div className='d-flex container-fluid text-center justify-content-center align-items-center'>
            <h1>Mentions légales</h1>
            <p><b>Editeur :</b>Fabien Astiasaran</p>
            <p><b>Contexte :</b>Portfolio</p>
            <p>
                <b>Contact :</b>
                <a href="mailto:fabien.astiasaran@gmail.com">fabien.astiasaran@gmail.com</a>
            </p>
            <p><b>Hébergerur :</b>OVH France</p>
        </div>
    );
}