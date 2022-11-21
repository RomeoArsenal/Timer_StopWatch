import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Button({text,onClick,type="primary"}) {
  return (
    <button className={`btn btn-${type} customButton`} onClick={()=>onClick()}>{text}</button>
  )
}

export default Button