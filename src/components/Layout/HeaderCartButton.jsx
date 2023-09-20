import React from "react";
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useEffect } from "react";
import { useState } from "react";

const HeaderCartButton = (props) => {
  const [btnISHighlighted, setBtnHigtlighted] = useState(false)
  const cartCtx=useContext(CartContext);
  const {items} =cartCtx;

  const numberOfCartItems=items.reduce((curNumber,item)=>{

    return curNumber + item.amount;
  },0);

  const btnclasses=`${classes.button } ${ btnISHighlighted  ? classes.bump :''}`;

  useEffect(()=>{

    if(items.length===0){
      return;
    }
    setBtnHigtlighted(true);
    const timer = setTimeout(() => {
      setBtnHigtlighted(false);
    }, 300);

    return ()=>{
      clearTimeout(timer);
    }
  },[items]);
  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
