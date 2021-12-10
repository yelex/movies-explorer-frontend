import React from 'react';
import './BtnMore.css';

function BtnMore(props){
    return (
        <button type="button" className="btn-more" onClick={props.onClick}>
            <p className="btn-more__text">
            Ещё
            </p>
        </button>
    )
}

export default BtnMore;

