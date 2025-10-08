import {lazy, Suspense} from "react";
import {Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout'

const HomePage = lazy(() => import('../views/HomePageView'));
const LegalNotice = lazy(() => import('../views/LegalNoticeView'))
const PrivacyPolicy = lazy(()=> import('../views/PrivacyPolicyView'))

export default function Router(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element = {<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="legalNotice" element={<LegalNotice/>}/>
                    <Route path="privacyPolicy" element={<PrivacyPolicy/>}/>
                </Route>
            </Routes>
        </Suspense>
      
    );
}