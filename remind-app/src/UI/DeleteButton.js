import React from 'react';

const DeleteButton = (props) => {
    return(
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )

} 

export default DeleteButton;