import React from 'react';
import SvgTemplate from '../svgTemplate';

const ContactItem = ({icon, url, text, mailto}) => {
    return (
        <li className="contact-item">
            <div className="contact-item__logo">
                { !mailto && <a href={url} target="blank"><SvgTemplate path={icon}/></a> }
                { mailto && <a href={`mailto:${mailto}`} target="blank"><SvgTemplate path={icon}/></a>}
            </div>
            <div className="contact-item__text">
                { !mailto && <a href={url} target="blank">{text}</a>}
                {  mailto && <a href={`mailto:${mailto}`} target="blank">{text}</a>}
            </div>
        </li>
    );
}

export default ContactItem;
