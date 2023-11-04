import React from 'react';
import WhatCardStyle from './WhatCardStyle';
const WhatCards = ({desc, image}) => {
  return (
    <WhatCardStyle className='single-whatcard'>
      <div className='what-icon'>
        <img src={image} alt="" />
      </div>
      <div>
        {
          desc.map((item, index)=>{
            return(
              <p key={index}>{item}</p>
            )
          })
        }
      </div>
    </WhatCardStyle>
  )
}

export default WhatCards