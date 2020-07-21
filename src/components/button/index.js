import React from 'react';

const Button = ({dark, type, text, action}) => {
    return (
        <button onClick={action} type={type} className={`button button--${dark ? 'dark':'light'}`}>
            {text}
        </button>
    );
}

export default Button;
