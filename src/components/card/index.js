import React from 'react';
import { FadeIn } from '../animations';

const Card = ({companyName, date, location, imgSrc, responsibilities, action}) => {
    return (
        <FadeIn>
            <div className="card">
                <div className="card__image">
                    <img src={imgSrc} alt={companyName}/>
                </div>
                <div className="card__content">
                    <h4>{companyName}</h4>
                    <p className="card__content--location">{`${date} / ${location}`}</p>
                    <p className="card__content--intro">{responsibilities}</p>
                    <div className="card__content--link" role="button"  tabindex="0" onClick={() => action(companyName)}>+ view details</div>
                </div>
            </div>
        </FadeIn>
    );
}

export default Card;

