import React from 'react';
import TextInputStyle from './TextInputStyle';

const TextInput = ({label, placeholder, img, type}) => {
  return (
    < TextInputStyle>
        <label htmlFor="name">{label}</label>
        <div className='input'>
            <img src={img} alt="username" />
            <input type={type} placeholder={placeholder}/>
        </div>
    </TextInputStyle>
  )
}

export default TextInput