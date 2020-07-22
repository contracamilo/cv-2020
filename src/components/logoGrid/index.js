import React, { useState, useEffect } from 'react';
import logosInfo from './logosInfo';
import { FadeIn } from '../animations';

const LogoGrid = () => {
    const [logos, setLogosInfo] = useState([]);
    
    useEffect(() => {
        setLogosInfo(logosInfo);
    }, [])

    console.log(logos, 'damm');
    
    return (
        <FadeIn>
            <div className="logo-grid">
                {logos.map((item, index) => <div className={"logo-grid__quad"} key={index}>
                    <img src={item.logoUrl} alt={item.name}/>
                    <span>{item.name}</span>
                </div>)}
            </div>
        </FadeIn>
    );
}

export default LogoGrid;

