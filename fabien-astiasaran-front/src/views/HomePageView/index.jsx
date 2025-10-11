import './HomePage.css'
import AboutMe from '../AboutMeView';
import Projects from '../ProjectsView';
import Skills from '../SkillsView';
import Contact from '../ContactView'
export default function HomePage(){
    return (
        <div className='home'>          
            <section className='introView scroll-margin-top' id='intro'>
                <AboutMe/>
                <hr />
            </section>
            <section className='projectsView scroll-margin-top' id='projets'>
                <Projects/>
                <hr />
            </section>
            <section className='skillsView scroll-margin-top' id='skills'>
                <Skills/>
                <hr />
            </section>
            <section className='contactView scroll-margin-top' id='contact'>
                <Contact/>
            </section>
        </div>
    );
}