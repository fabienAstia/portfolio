// import { Outlet } from 'react-router-dom';
import Header from '../Header'
import { useRef } from 'react';

export default function Layout(){
    const introRef = useRef(null)
    const projectRef = useRef(null)
    const skillsRef = useRef(null)
    const contactRef = useRef(null)
    function goTo(sectionRef){
        sectionRef.current?.scrollIntoView();
    }
    return (
        <>
            <Header goTo={goTo}/>
            <main className='container py-4'>
                <HomePage goTo={sectionRef}/>
            </main>
        </>
    );
}

