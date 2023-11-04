import React from 'react';
import HomeStyle from '../styles/HomeStyle.js';
import Circle1 from '../assets/icons/Ellipse1.svg';
import Circle2 from '../assets/icons/Ellipse2.svg';
import CirclePics from '../assets/images/excelcart 1.png';
import Subtitle from '../components/Subtitle/Subtitle.jsx';
import why1 from '../assets/images/why1.png';
import why2 from '../assets/images/why2.png';
import why3 from '../assets/images/why3.png';
import What1 from '../assets/images/what1.png';
import What2 from '../assets/images/what2.png';
import What3 from '../assets/images/what3.png';
import WhyCard from '../components/WhyCard/WhyCard.jsx';
import QuestionMark from '../assets/icons/question-marks.svg'
import WhatCards from '../components/WhatCards/WhatCards.jsx';
import Laptops from '../assets/images/laptop.png';
import Slider from 'react-slick';
import Image1 from '../assets/images/Ellipse1.png';
import Image2 from '../assets/images/Ellipse2.png';
import Image3 from '../assets/images/Ellipse3.png';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Group from '../assets/icons/group.svg';


const Home = () => {

    const whycard = [
        {
            title:'Find The Best Deals',
            image:why1,
            desc:'Excelcart Brings Together Students And Sellers To Offer You Unbeatable Deals On Campus Essentials.'
        },
        {
            title:'Earn As A Courier',
            image:why2,
            desc:'Be Your Boss And Earn Extra Income By Delivering Orders Right Within Your Campus.'
        },
        {
            title:'Connect With Your Community',
            image:why3,
            desc:"Excelcart Is Not Just A Marketplace; It's Your Hub For Staying Updated On Campus Life."
        }
    ]
    const whatcards = [
        {
            image:What1,
            desc:["- Browse A Wide Range Of Products Tailored To Your Campus Needs"," - Shop From Trusted Sellers Right On Your Campus"," - Enjoy Exclusive Student Discounts And Deals"]
        },
        {
            image:What2,
            desc:["List Your Items Easily And Reach Out To Your Fellow Students - ","Manage Your Listings And Transactions Hassle-free - " ,"Turn Your Unused Items Into Cash -"]
        },
        {
            image:What3,
            desc:["- Sign Up As A Courier And Earn Money On Your Own Schedule."," - Deliver Orders To Your Peers And Be A Valuable Part Of The Campus Community.","- No More Waiting For Deliveries – Make It Happen Yourself!"]
        }
    ]
    const testimonial = [
        {
            img:Image1,
            desc:"Excelcart Has Been A Game-changer For Me. I Found Textbooks, Gadgets, And Even Part-time Work Opportunities, All Within My Campus!",
        },
        {
            img:Image2,
            desc:"Excelcart Has Been A Game-changer For Me. I Found Textbooks, Gadgets, And Even Part-time Work Opportunities, All Within My Campus!",
        },
        {
            img:Image3,
            desc:"Excelcart Has Been A Game-changer For Me. I Found Textbooks, Gadgets, And Even Part-time Work Opportunities, All Within My Campus!",
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true
                }
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    dots:true
                }
            }
        ]
      };
  return (
    <HomeStyle>
        <section className="hero">
            <div className='hero__cover'>
            {/* ==== hero start ===== */}
            <div className="hero__text">
                <h3>Welcome to Excelcart your campus market place</h3>
                <div className='discover'>
                    <span></span>
                    <h2>Discover, Buy, sell, and earn within your college campus community</h2>
                </div>
                <p>Excelcart is a unique online platform designed exclusively for college students. Whether you are looking to buy, sell, or earn income on campus, Excelcart is here to make your college life easier and more connected</p>
                <button className='btn-1'>Get Started</button>
            </div>
            <div className='hero__images'>
                <div className="circles">
                    <img src={Circle1} alt="circle-design" className='blue-circle'/>
                    <img src={Circle2} alt="circle-design" className='white-circle'/>
                </div>
                <div className="circle-pics">
                    <img src={CirclePics} alt="circle-pics" />
                </div>
            </div>
            <div className="btn-cover">
            <button className='btn-2'>Get Started</button>
            </div>
            {/* ==== hero ends ====== */}
            </div>
        </section>
        <section className="why">
            {/* ====== why starts ========= */}
            <Subtitle text={'Why Excelcart?'}/>
            <div className="whycards">
                {
                    whycard.map((item, index)=>{
                        return <WhyCard title={item.title} image={item.image} desc={item.desc} key={index}/>
                    })
                }
            </div>
            {/* ====== why ends ========= */}
        </section>
        <section className='question'>
            {/* ========what card======= */}
            <div className='question-mark'>
                <img src={QuestionMark} alt="question-mark" />
            </div>
            <Subtitle text={'What Can You Do Here?'}/>
            <div className="whatcards">
                {
                    whatcards.map((item, index)=>{
                        return <WhatCards image={item.image} desc={item.desc} key={index}/>
                    })
                }
            </div>
            {/* ======= what ends ============== */}
        </section>
        <section className='join'>
            {/* ===== join start ===== */}
                <div>
                    <img src={Laptops} alt="" />
                </div>
                <div className='join__text'>
                    <h2>Join the ExcelCart Community Today!</h2>
                    <div className='discover'>
                        <span className="line"></span>
                        <p>Start Exploring Excelcart Now And <br /> Experience Campus Life Like Never <br /> Before.</p>
                    </div>
                    <button>Get Started</button>
                </div>
                <div className='group'>
                <img src={Group} alt="group"/>
                </div>
            {/* ===== join ends======= */}
        </section>
        <section className='testimonial'>
            {/* ==== testimonials start ==== */}
            <h2>What are Students Saying</h2>
                <Slider {...settings} style={{display:'flex'}}>
                {
                    testimonial.map((item, index)=>{
                        return (<Testimonials image={item.img} desc={item.desc} key={index}/>)
                    })
                }
                </Slider>
            {/* ==== testimonials end ====== */}
        </section>
    </HomeStyle>
  )
}

export default Home