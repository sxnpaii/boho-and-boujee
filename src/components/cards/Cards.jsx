import React from 'react';
import './cards.scss';

function Cards(props) {
    return (
        <div className="cardss">
            <h3>{props.heading}</h3>
            <img src={props.img} alt="" />
        </div>
    )
}

export default Cards;
