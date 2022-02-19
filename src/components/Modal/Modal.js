

import s from "./Modal.module.css"
import PropTypes from 'prop-types';
export default function Modal({header,text, closeModal,onBackDropClose,onOkClick}){
    return(

     <>
         <div className={s.background} data-value='backdrop'onClick={onBackDropClose}> 
             <div className={s.modal}>
                 <h1 className={s.header}>{header}</h1>
                <button onClick={closeModal}className={s.button}>X</button>
                <p className={s.text}>{text}</p>
                <div className={s.container}>
                <button className={s.buttonOk} onClick={onOkClick}>Ok</button>
                <button className={s.buttonCancel} onClick={closeModal}>Cancel</button>
                </div>
             </div>
         </div>
     </>
    )
}
Modal.propTypes={
    header:PropTypes.string,
   text:PropTypes.string,
   closeModal:PropTypes.func.isRequired,
   onBackDropClose:PropTypes.func.isRequired,
   onOkClick:PropTypes.func.isRequired
   
   
}