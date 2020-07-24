import React from 'react';
import setText from "../../utils/i18n/textSetter";
import {useTranslation} from "react-i18next";
import { FadeIn } from '../animations';

const PortfolioCard = ({imgSrc, projectName, stack, desc, privateProject, projectUrl}) => {
    const {t} = useTranslation();

    return (
            <div className="portfolio-card">
            <div className="portfolio-card__pic">
                <img src={imgSrc} alt={projectName} />
            </div>
            <div className="portfolio-card__content">
                    <ul>
                        <li><h3>{projectName}</h3></li>
                        <li><b>{t('port_card_stack', setText('PORT_STACK'))}</b> {stack}</li>
                        <li><b>{t('post_card_desc', setText('PORT_DESC'))}</b> {desc}</li>
                        {privateProject ? <li><a href={`https://${projectUrl}`} target="blank">+ View more.</a></li> : <li>{'Private project'}</li>}
                    </ul>
            </div>
            </div>
    );
}

export default PortfolioCard;
