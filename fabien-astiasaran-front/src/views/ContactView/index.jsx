import { useState } from 'react';
import './Contact.css'

export default function Contact(){
    const [charCount, setCount] = useState(0);
    const MAX_CHARS = 400;
    return(
        <>
        <h2>Contact</h2>
        <form>
            <div className='row row-cols-1 row-cols-md-2'>
                <div className="col mb-3">
                    <label for="firstname" className="form-label">Prénom :</label>
                    <input type="text" className="form-control" id="firstname"/>
                </div>
                <div className="col mb-3">
                    <label for="lastName" className="form-label">Nom :</label>
                    <input type="text" className="form-control" id="lastName"/>
                </div>
            </div>
          
            <div className="mb-3">
                <label className="form-label" for="email">Email :</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">Nous ne partagerons jamais votre email.</div>
            </div>
            <div className='mb-3'>
                <textarea name="" className='w-100 form-control' 
                placeholder='Un commentaire ...' rows={4} maxLength={MAX_CHARS}
                onChange={(event) => setCount(event.target.value.length)}/>
                <div className='remaining-char'>{MAX_CHARS - charCount} caractères restants</div>
            </div>
            <div className='d-flex justify-content-center'>
                <button type="submit" className="mt-3 btn btn-outline-dark width-button">Submit</button>
            </div>
        </form>
        </>
    );
}