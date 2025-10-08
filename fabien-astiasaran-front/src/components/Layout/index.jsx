import Header from '../Header'
// import HomePage from '../../views/HomePageView'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom';

export default function Layout(){
    return (
        <>
        <Header/>
        <main className='container py-4'>
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
}

