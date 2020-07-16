import React from 'react';
import './BlueButton.css';

export default function BlueButton(props) {

    return (
        <div>
            <button className="bl123">{props.children}</button>
        </div>
    );
}
