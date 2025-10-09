import { useState } from 'react';
import './Contact.css'

export default function Contact(){
    const [charCount, setCount] = useState(0);
    const MAX_CHARS = 400;
    return(
        <>
        <h2>Contact</h2>
        <p className='text-center mb-3'>Vous souhaitez me parler d’un projet ou d’une opportunité ?</p>
        <div className='d-flex justify-content-center gap-3 mb-5'>
            <a href="mailto:fabien.astiasaran@gmail.com" target='_blank' className='btn btn-lg btn-outline-dark'>M'écrire un email</a>
            <a href="https://www.linkedin.com/in/fabien-astiasaran" target='_blank' className='btn btn-lg btn-outline-dark'>Me contacter sur Linkedin</a>
        </div>
        </>
    );
}