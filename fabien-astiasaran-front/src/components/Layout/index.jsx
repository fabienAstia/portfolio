import Header from '../Header'
import HomePage from '../../views/HomePageView'
import { useRef } from 'react';

export default function Layout(){
    const introRef = useRef(null)
    const projectRef = useRef(null)
    const skillsRef = useRef(null)
    const contactRef = useRef(null)
    const refs = {introRef, projectRef, skillsRef, contactRef}
    function goTo(ref){
        ref.current?.scrollIntoView({behavior:'smooth'});
    }
    return (
        <>
        <Header goTo={goTo} refs={refs}/>
        <main className='container py-4'>
            <HomePage refs={refs}/>
        </main>
        </>
    );
}

