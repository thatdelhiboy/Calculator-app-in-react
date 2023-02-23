import React from 'react'
import classes from './Button.module.css';


function Button({handleClick, value}) {

  return (
    <div className={ value ==="C" || value === "=" ? `${classes.calcbtns} ${classes.res}` : `${classes.calcbtns}`} onClick = {()=>handleClick(value)} >{value}</div>
  )
}

export default Button