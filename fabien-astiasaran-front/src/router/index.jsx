import {lazy, Suspense} from "react";
import {Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout'

const HomePage = lazy(() => import('../views/HomePageView'));
const Projects = lazy(() => import('../views/ProjectsView'))
const Skills = lazy(() => import('../views/SkillsView'))
const Contact = lazy(() => import('../views/ContactView'))

export default function Router(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element = {<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="skills" element={<Skills/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </Suspense>
      
    );
}