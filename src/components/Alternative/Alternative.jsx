import React from 'react';
import AlternativeStyle from './AlternativeStyle';
import Google from '../../assets/icons/google1.svg';
import Facebook from '../../assets/icons/Facebook1.svg';
import { Link } from 'react-router-dom';

const Alternative = ({link}) => {
  return (
    <AlternativeStyle>
        <p>Or using</p>
        <div className='button'>
            <button><img src={Google} alt="google" /><span>Continue with Google</span></button>
            <button><img src={Facebook} alt="Facebook" /><span>Continue with Facebook</span></button>
        </div>
        <p className='signup'>Dont have an account? <Link to={link}><span>Sign Up</span></Link> here</p>
    </AlternativeStyle>
  )
}

export default Alternative