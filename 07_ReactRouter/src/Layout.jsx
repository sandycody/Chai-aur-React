import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';  

const Layout = () => {
    return (
        <>
            <Header />
            {/* //Dynamically cheeze pass karne ke liye, we use Outlet like Home, About components. Isme Header and Footer remains same lekin Outlet dene se we can modify the content in it */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
