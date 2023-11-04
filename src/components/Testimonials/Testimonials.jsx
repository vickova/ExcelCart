import React from 'react'
import TestimonialStyle from './TestimonialStyle'

const Testimonials = ({image, desc}) => {
  return (
    <TestimonialStyle>
        <img src={image} alt="" />
        <p>{desc}</p>
    </TestimonialStyle>
  )
}

export default Testimonials