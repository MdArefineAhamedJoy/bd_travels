import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Page/Sheard/NavBar/NavBar';



const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;