import React from 'react';
import './Alert.css';

const Alert = props => {
    let alertType;
    let iconsType;
    let btnType;
    if (props.type === 'success'){
        alertType = 'alert success';
        iconsType = 'far fa-times-circle';
        btnType = 'btn'
    } else if (props.type === 'secondary'){
        alertType = 'alert secondary'
    }
    return props.clickDismissable ?  <div className={alertType} >
        <button className={btnType} onClick={props.dismiss}><i className={iconsType}></i></button>
        {props.children}
        </div> : <div onClick={props.dismiss} className={alertType} >
        {props.children}
        </div>
};

export default Alert;