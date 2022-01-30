import React from 'react';
import PropTypes from 'prop-types';

import s from "./Button.module.scss"
export default function Button({text, color,onClick}){
    return(
        <button className={s.button} style={{backgroundColor:color}} onClick={onClick}>{text}</button>
    )
    
}
Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}