import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Page/Sheard/NavBar/NavBar';
import Footer from '../Page/Sheard/NavBar/Footer';



const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;