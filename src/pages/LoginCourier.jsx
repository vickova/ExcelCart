import React from 'react';
import SignupsHeader from '../components/SignupsHeader/SignupsHeader';
import '../styles/Signups.css';
import CourierImage from '../assets/images/rafiki.png';
import TextInput from '../components/TextInput/TextInput';
import Email from '../assets/icons/mail.svg';
import Eye from '../assets/icons/eye-off.svg';
import PasswordInput from '../components/PasswordInput/PasswordInput';
import Button from '../components/Button/Button';
import Alternative from '../components/Alternative/Alternative';

const LoginCourier = () => {
  return (
    <div className='signups'>
    <div className='inner'>
      <SignupsHeader/>
      <div className='welcome'>
        <h2>Welcome back!</h2>
        <p>Please login to continue</p>
      </div>
      <div>
        <img src={CourierImage} alt="kiosk" />
      </div>
      <form action="">
        <TextInput label={'Email'} placeholder={'olivia@untitledui.com'} img={Email}/>
        <PasswordInput img={Eye} label={'Password'} placeholder={'* * * * * * *'} type={'password'}/>
        <p className='forgot'>Forgot password? </p>
        <Button text={'Sign in'}/>
      </form>
      <Alternative/>
      </div>
    </div>
  )
}

export default LoginCourier