import React from 'react';
import setText from "../../utils/i18n/textSetter";
import {useTranslation} from "react-i18next";

const PortfolioCard = ({imgSrc, projectName, stack, desc, privateProject, projectUrl}) => {
    const {t} = useTranslation();

    return (
            <div className="portfolio-card animated;">
            <div className="portfolio-card__pic animated">
                <img src={imgSrc} alt={projectName} />
            </div>
            <div className="portfolio-card__content animated">
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
