import Header from '../Header'
import Footer from '../Footer'
import './Layout.css'
import { Outlet } from 'react-router-dom';

export default function Layout(){
    return (
        <>
        <Header/>
        <main className='container-fluid py-4 px-5'>
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
}

