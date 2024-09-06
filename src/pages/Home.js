import React from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';

const Home = () => {
    React.useEffect(() => {
        document.title = "Learn C++ Programming | Your Ultimate Resource for C++ Tutorials";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Discover comprehensive C++ programming tutorials and resources. Perfect for beginners and intermediate programmers looking to master C++.');
        }
    }, []);

    return (
        <div className="home">
            <header className="header">
                <nav>
                    {/* Add navigation menu items here */}
                </nav>
            </header>
            <main>
                <section className="hero full-page">
                    <div className='main'>
                        <h1>Learn C++ Programming</h1>
                        <p>Your comprehensive resource for mastering C++ programming. From basics to advanced topics, we've got you covered.</p>
                        <a href="/lessons" className="cta-button">Get Started</a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};


export default Home;