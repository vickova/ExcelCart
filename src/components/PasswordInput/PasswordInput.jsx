import React, { useState } from 'react';
import PasswordInputStyle from './PasswordInputStyle';

const PasswordInput = ({label, placeholder, img, type}) => {
  const [toggle, setToggle] = useState(false);
  return (
    < PasswordInputStyle>
        <label htmlFor="name">{label}</label>
        <div className='input'>
            <input type={toggle?'text':type} placeholder={placeholder}/>
            <img src={img} alt="username" onClick={()=>setToggle(!toggle)}/>
        </div>
    </PasswordInputStyle>
  )
}

export default PasswordInput