import React from 'react';
import './clear.scss';

export default function Clear(props){
    return(
        <div className="clear_item" onClick={props.deleteButtonClick}>Delete All</div>
    )
}