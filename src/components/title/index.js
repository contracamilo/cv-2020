import React from 'react';

const Title = ({before, main, after, dark}) => {
    return (
        <h3 className={`section-title ${dark ? 'dark': 'light'}`}>
            {before ? before : null}
            <strong className="section-title__main">{main}</strong>
            {after ? after : null}
        </h3>
    );
}

export default Title;
