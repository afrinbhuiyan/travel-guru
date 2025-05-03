import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;