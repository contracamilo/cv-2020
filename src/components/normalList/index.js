import React from 'react';
import setText from "../../utils/i18n/textSetter";
import {useTranslation} from "react-i18next";

const NormalList = ({info = [], title}) => {
    const {t} = useTranslation();



    return (
        <ul className="normal-list">
            {title && <h4>{title}</h4>}
            {info.map((item, index) => 
                <li key={index}>
                    {t(item.translation, setText(item.i18N))}
                </li>)}
        </ul>
    );
}

export default NormalList;
