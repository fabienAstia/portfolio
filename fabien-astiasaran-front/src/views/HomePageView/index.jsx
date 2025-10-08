import './HomePage.css'
import AboutMe from '../AboutMeView';
import Projects from '../ProjectsView';
import Skills from '../SkillsView';
import ErrorBoundary from '../../components/ErrorBoundary';
import Contact from '../ContactView'

export default function HomePage(){
    return (
        <>          
        <section className='intro'>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <AboutMe/>
            </ErrorBoundary>
        </section>
        
        <section className='projectsView'>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <Projects/>
            </ErrorBoundary>
        </section>

        <section className='skillsView'>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <Skills/>
            </ErrorBoundary>
        </section>
         <section className='contactView'>
            <ErrorBoundary fallback={<p>Somenthing went wrong</p>}>
                <Contact/>
            </ErrorBoundary>
        </section>
        </>
    );
}