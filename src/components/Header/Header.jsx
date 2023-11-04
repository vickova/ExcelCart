import React, { useState } from 'react';
import HeaderStyle from './HeaderStyle';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';
import Menu from '../../assets/icons/menu.svg';
import Exit from '../../assets/icons/exit.svg';

const Header = () => {
    const [menu, setMenu] = useState(false)
    const nav__links = [
        {
          path:'/home',
          display:"Home"
        },
        {
            path:'/buyer',
            display:"Buyer"
        },
          {
            path:'/seller',
            display:"Seller"
        },
          {
            path:'/contact',
            display:"Contact"
        },
        {
            path:'/courier',
            display:"Become a Courier"
        }
      ]
      const pathname = useLocation().pathname

  return (
<HeaderStyle style={{display:pathname==='/home'|| pathname === '/contact'?'block':'none'}} menu={menu}>
    <div className="header">
    {/* ====logo start ===== */}
    <div className="logo">
        <img src={Logo} alt="excelcart-logo" />
    </div>
    {/* ===== logo end ===== */}
    {/* ==== menu start ===== */}
    
    <nav>
    <div className='menu-cover'>
        {menu? <img src={Exit} alt="exit" onClick={()=>setMenu(!menu)}/>:
    <img src={Menu} alt="menu__button" className='menu' onClick={()=>setMenu(!menu)}/>
        }
    </div>
        <ul>
            {
                nav__links.map((items, index)=>{
                    return (
                    <li className="nav__item" key={index}>
                        <NavLink to={items.path} className={navClass => navClass.isActive?'active__link':''}>{items.display}</NavLink>
                    </li>
                    )
                })
            }
        </ul>
        
    </nav>
    {/* ===== menu end====== */}
    
    </div>
</HeaderStyle>
  )
}

export default Header