import './HomePage.css'
import AboutMe from '../AboutMeView';
import Projects from '../ProjectsView';
import Skills from '../SkillsView';
import ErrorBoundary from '../../components/ErrorBoundary';
import Contact from '../ContactView'
import {useRef} from 'react'

export default function HomePage(){
    const projectsView = useRef(null);
    function goTo(ref){
        ref.current.scrollIntoView();
    }
    return (
        <>          
        <section className='intro scroll-margin-top'>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <AboutMe/>
            </ErrorBoundary>
            <button onClick={() => goTo(projectsView)}>go to Projects</button>
        </section>
        
        <section className='projectsView scroll-margin-top' ref={projectsView}>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <Projects/>
            </ErrorBoundary>
        </section>

        <section className='skillsView scroll-margin-top'>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <Skills/>
            </ErrorBoundary>
        </section>
         <section className='contactView scroll-margin-top'>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <Contact/>
            </ErrorBoundary>
        </section>
        </>
    );
}