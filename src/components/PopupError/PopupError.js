import React from 'react';
import failSignPath from '../../images/popup-fail.svg';
import './PopupError.css';

function PopupError(props) {

    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} onClick={ props.onClose }>
            <div className="popup__container">
                <img className="popup__sign"
                    src={ failSignPath } 
                    alt="fail"/>
                <h3 className="popup__title">{ props.message }</h3>
                <button type="button" className="popup__close-btn" onClick={ props.onClose }></button>
            </div>
        </div>
    )
}

export default PopupError;