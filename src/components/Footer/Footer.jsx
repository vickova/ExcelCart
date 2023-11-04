import React from 'react';
import { useLocation } from 'react-router-dom';
import FooterStyle from './FooterStyle';
import Linkedin from '../../assets/icons/Linkedin.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Twitter from '../../assets/icons/Twitter.svg';
import Facebook from '../../assets/icons/facebook.svg';

const Footer = () => {
  const pathname = useLocation().pathname;
  const currentYear = new Date().getFullYear();
  return (
    <FooterStyle style={{display:pathname==='/home'|| pathname === '/contact'?'block':'none'}}>
      <div className='lists'>
        <ul>
          <li>Product</li>
          <li>About</li>
          <li>Support</li>
        </ul>
        <ul>
          <li>Contact us</li>
          <li>Privacy and Policy</li>
          <li>Terms of Service</li>
        </ul>
        </div>
        <hr />
        <div className="icons">
          <img src={Linkedin} alt="Linkedin" />
          <img src={Twitter} alt="Twitter" />
          <img src={Instagram} alt="Instagram" />
          <img src={Facebook} alt="Facebook" />
        </div>
        <p>© <span>{currentYear}</span> Excelcart. All Rights Reserved.</p>
    </FooterStyle>
  )
}

export default Footer