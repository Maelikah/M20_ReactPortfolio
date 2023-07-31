import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
//import Page from './Page';
import Footer from './Footer';

export default function Navtabs () {
    const [tabs] = useState ([
        {
            name: 'about me'
        },
        {
            name: 'portfolio'
        },
        {
            name: 'contact'
        },
        {
            name: 'resume'
        },
    ]);

    const [currentPage, setCurrentPage] = useState(tabs[0]);
    
    return (
        <div>
            <Header>
                <Nav
                    pages = {tabs}
                    setCurrentPage = {setCurrentPage}
                    currentPage = {currentPage}>
                </Nav>
            </Header>
            {/* <main>
                <Page 
                    currentPage = {currentPage}>
                </Page>
            </main> */}
            <Footer />
        </div>
    );
}