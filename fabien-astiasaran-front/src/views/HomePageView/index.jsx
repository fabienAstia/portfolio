import './HomePage.css'
import AboutMe from '../AboutMeView';
import Projects from '../ProjectsView';
import Skills from '../SkillsView';
import ErrorBoundary from '../../components/ErrorBoundary';
import Contact from '../ContactView'
import { useRef } from 'react';

export default function HomePage(){
    return (
        <>          
        <section className='intro' ref={introRef}>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <AboutMe/>
            </ErrorBoundary>
        </section>
        
        <section className='projectsView' ref={projectRef}>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <Projects/>
            </ErrorBoundary>
        </section>

        <section className='skillsView' ref={skillsRef}>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <Skills/>
            </ErrorBoundary>
        </section>
         <section className='contactView' ref={contactRef}>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <Contact/>
            </ErrorBoundary>
        </section>
        </>
    );
}

function goTo(){

}