import React from 'react';
import SignupsHeader from '../components/SignupsHeader/SignupsHeader';
import '../styles/Signups.css';
import Amico from '../assets/images/rafiki1.png';
import TextInput from '../components/TextInput/TextInput';
import User from '../assets/icons/user.svg';
import Email from '../assets/icons/mail.svg';
import Phone from '../assets/icons/phone.svg';
import Id from '../assets/icons/id.svg';
import SelectInput from '../components/SelectInput/SelectInput';
import PasswordInput from '../components/PasswordInput/PasswordInput';
import Eye from '../assets/icons/eye-off.svg';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';



const SignUpBuyer = () => {
  return (
    <div className='signups'>
      <div className='inner'>
      <SignupsHeader/>
      <div>
        <h2 className='title'>SignUp</h2>
        <div>
          <img src={Amico} alt="courier" />
        </div>
        <form action="">
          <TextInput img={User} label={'Full name'} placeholder={'Jeremy Gilbert'} type={'text'}/>
          <TextInput img={Email} label={'Email'} placeholder={'olivia@untitledui.com'} type={'email'}/>
          <SelectInput/>
          <TextInput img={Phone} label={'Phone number'} placeholder={'0071 3452 675'} type={'number'}/>
          <TextInput img={Id} label={'Means of Identification'} placeholder={'Driver’s license, School ID card'} type={'file'}/>
          <TextInput img={Phone} label={'Phone number'} placeholder={'0071 3452 675'} type={'number'}/>
          <PasswordInput img={Eye} label={'Password'} placeholder={'* * * * * * *'} type={'password'}/>
          <PasswordInput img={Eye} label={'Confirm Password'} placeholder={'* * * * * * *'} type={'password'}/>
          <div className='agreement'>
            <div>
            <input type="checkbox" />
            </div>
            <p>I agree to the <span>terms of service</span> & <span>privacy policy</span></p>
          </div>
          <Button text={'Create Account'}/>
        </form>
        <p className='account'>Already have an account? <Link to={'/courier/login'}><span>Sign in</span></Link> </p>
      </div>
      </div>
    </div>
  )
}

export default SignUpBuyer