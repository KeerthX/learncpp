// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home">
            <section className="full-page">
                <div className='main'>
                    <h1>learncpp |</h1>
                    <p>This is a webiste dedicated to help you learn C ++ Programming</p>
                </div>

            </section>
            <Footer />
        </div>

    );
};

export default Home;