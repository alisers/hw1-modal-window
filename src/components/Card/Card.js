import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 
import s from './Card.module.css'
import PropTypes from 'prop-types';

function Card({ id, img, name, price, color, onModalClick, accentColor }) {
   
  return (
    <>
      <li className={s.card}>
        <img src={img} alt={name} height='300' width='300'/>
        <p className={s.name}>{name}</p>
        <div className={s.wrapper}>
        <span className={s.price}>Price:{price}$</span>
        <span className={s.color}>Color:{color}</span>
        </div>
        <button className={s.button} type="button" onClick={onModalClick} data-id={id}>Add to cart</button>
      <FontAwesomeIcon icon={solid('star')} color={accentColor} className={s.star}/> 
        
      </li>
    </>
  );
}

export default Card

Card.propTypes={
  id:PropTypes.string,
  img:PropTypes.string,
  name:PropTypes.string,
  price:PropTypes.string,
  color:PropTypes.string,
  onModalClick:PropTypes.func.isRequired,
  accentColor:PropTypes.string
}