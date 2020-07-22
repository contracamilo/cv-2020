import React from 'react';

const ModalBody = ({close, title, modalType, children}) => {
    return (
        <div className="modal">
            <div className={`modal__wrapper modal__wrapper--${modalType}`}>
                <div className="modal__head">
                    <h4>{title}</h4>
                    <button 
                        className="modal-close"
                        onClick={() => close()}
                     >X</button>
                </div>
                <div className="modal__content">
                    {children}
                </div>
                     
            </div>
        </div>
    );
}

export default ModalBody;