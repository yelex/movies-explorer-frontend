import './Head.css';
import React from 'react';

function Head(props) {

    return (
      <div className="section-title">
        <h2 className="section-title__text">{ props.title }</h2>
      </div>
    );
  }
  
  export default Head;