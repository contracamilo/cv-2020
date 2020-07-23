import React from 'react';
import PortfolioCard from '../components/portfolioCard';
import Button from '../components/button';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
        <div className="portfolio">
            <nav className="portfolio__nav">
                    <div className="portfolio__pic"></div>
                    <h1>Portfolio</h1>
                    <Link to="/"><Button text={'Back'} dark={true}/></Link>
            </nav>
            <main className="portfolio__content">
                <section>
                    <PortfolioCard />
                </section>
                <footer>last update July 2020</footer>
            </main>
            
        </div>
        
        </>
    );
}

export default Portfolio;
