import React from 'react';
import s from "./Modal.module.css"
import PropTypes from 'prop-types';
export default function Modal({header,closeButton,text,onClick, onBackDropClose}){
    return(

     <>
         <div className={s.background} data-value='backdrop' onClick={onBackDropClose}> 
             <div className={s.modal}>
                 <h1 className={s.header}>{header}</h1>
                {closeButton && <button onClick={onClick} className={s.button}>X</button>}
                <p className={s.text}>{text}</p>
             </div>
         </div>
     </>
    )
}
Modal.propTypes={
    header:PropTypes.string,
   closeButton:PropTypes.bool,
   text:PropTypes.string,
   onClick:PropTypes.func,
   onBackDropClose:PropTypes.func,
}