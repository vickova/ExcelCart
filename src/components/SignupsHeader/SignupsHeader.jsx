import React from 'react';
import Arrow from '../../assets/icons/back-arrow.svg';
import SignupsHeaderStyle from './SignupsHeaderStyle';
import { NavLink, useNavigate } from 'react-router-dom';


const SignupsHeader = () => {
    const navigate = useNavigate();
    const nav__links = [
          {
            path:'/seller',
            display:"Seller"
        },
        {
            path:'/buyer',
            display:"Buyer"
        },
          {
            path:'/courier',
            display:"Become a courier"
        }
      ]
  return (
    <SignupsHeaderStyle>
        <div style={{width:'max-content'}} onClick={()=>navigate(-1)}>
            <img src={Arrow} alt="back-arrow" />
        </div>
        <nav>
            <ul>
            {
                nav__links.map((items, index)=>{
                    return (
                    <li className="nav__item" key={index}>
                        <NavLink className={navClass => navClass.isActive?'active__link':''} to={items.path}>{items.display}</NavLink>
                    </li>
                    )
                })
            }
            </ul>
        </nav>
    </SignupsHeaderStyle>
  )
}

export default SignupsHeader