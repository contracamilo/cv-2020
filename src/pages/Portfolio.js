import React, { useState, useEffect } from 'react';
import PortfolioCard from '../components/portfolioCard';
import Button from '../components/button';
import { Link } from 'react-router-dom';
import setText from "../utils/i18n/textSetter";
import useObserver from '../hooks/useIntersectionObserver';
import {useTranslation} from "react-i18next";
import { portfolio } from './portfolioInfo'

const Portfolio = () => {
    const {t} = useTranslation();
    const [portfolioItems, setPortfolioItems] = useState(portfolio);

    useEffect(() => {
        setPortfolioItems(portfolio);
    }, [])


    const [observer, setElements, entries] = useObserver({
		threshold: 0.25,
		root: null
	  });

    useEffect(() => {
		entries.forEach(entry => {
		  const box = entry.target;
		  if (entry.isIntersecting) {
			setTimeout(() => {
				box.classList.add("effect");
            }, 300);
            
            setTimeout(() => {
				box.classList.add("effect-after");
			}, 700);
			//if you need put the class only once
			//observer.unobserve(box);
		  } else {
            box.classList.remove("effect");
            box.classList.remove("effect-after");
		  }
		});
	  }, [entries, observer]);
	
	  useEffect(() => {
		const images = document.querySelectorAll(".portfolio");
		setElements(images);
	  }, [setElements]);

    return (
        <>
        <div className="portfolio">
            <nav className="portfolio__nav">
                    <div className="portfolio__pic"></div>
                    <h1>{t('port_title', setText('PORT_TITLE'))}</h1>
                    <Link to="/"><Button text={t('port_button', setText('PORT_BUTTON'))} dark={true}/></Link>
            </nav>
            <main className="portfolio__content">
                <section>
                    {portfolioItems.length && portfolioItems.map((item, index) => <PortfolioCard {...item} key={index}/>) }
                </section>
                <footer>{t('port_foot', setText('PORT_FOOT_PRINT'))}</footer>
            </main> 
        </div>
        
        </>
    );
}

export default Portfolio;
