import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Header />
            <div className="d-flex" id="wrapper">
                <Sidebar />
                <div id="page-content-wrapper">
                    <MainContent />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
