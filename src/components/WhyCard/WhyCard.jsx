import React from 'react';
import WhyCardStyle from './WhyCardStyle';

const WhyCard = ({title, image, desc}) => {
  return (
    <WhyCardStyle>
        <h3>{title}</h3>
        <img src={image} alt="" />
        <p>{desc}</p>
    </WhyCardStyle>
  )
}

export default WhyCard