import './HomePage.css'
import AboutMe from '../AboutMeView';
import Projects from '../ProjectsView';
import Skills from '../SkillsView';
import Contact from '../ContactView'
export default function HomePage(){
    return (
        <>          
        <section className='introView scroll-margin-top' id='intro'>
            <AboutMe/>
        </section>
        <section className='projectsView scroll-margin-top' id='projets'>
            <Projects/>
        </section>
        <section className='skillsView scroll-margin-top' id='skills'>
            <Skills/>
        </section>
         <section className='contactView scroll-margin-top' id='contact'>
            <Contact/>
        </section>
        </>
    );
}