import './HomePage.css'
import AboutMe from '../AboutMeView';
import Projects from '../ProjectsView';
import Skills from '../SkillsView';
import Contact from '../ContactView'
export default function HomePage({refs}){
    return (
        <>          
        <section className='introView scroll-margin-top' ref={refs.introRef}>
            <AboutMe/>
        </section>
        <section className='projectsView scroll-margin-top' ref={refs.projectRef}>
            <Projects/>
        </section>
        <section className='skillsView scroll-margin-top' ref={refs.skillsRef}>
            <Skills/>
        </section>
         <section className='contactView scroll-margin-top' ref={refs.contactRef}>
            <Contact/>
        </section>
        </>
    );
}