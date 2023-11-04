import styled from "styled-components";
import Why1 from '../assets/icons/light-bg1.svg';
import Why2 from '../assets/icons/light-bg2.svg';
import WhyDesktop from '../assets/icons/bg-mobile-left.svg';
import WhyDesktop2 from '../assets/icons/bg-mobile-right.svg';
import Join from '../assets/icons/background-thick.svg';
import MobileJoin from '../assets/images/mobile-join-bg.png';

const HomeStyle = styled.div`
    h2{
        text-align:center;
    }
    .discover h2{
        text-align:left;
    }
    .question{
        margin: 6rem 0 3rem 0;
    }
    .hero{
        height:100vh;
        background:linear-gradient(rgba(0, 171, 154, 0.172), #fff);
    }
    .hero__cover{
        width:90%;
        height:100%;
        display:flex;
        flex-wrap:wrap;
        margin: 0 0 0 auto;
        right:0;
        align-items:center;
        /* overflow:hidden; */
    }
    .hero__images{
        width:50%;
        height:100%;
        position:relative;
    }
    .hero__text{
        width:45%;
        h3{
            color: #116F66;
            font-size:1.5rem;
        }
        .discover{
            display:flex;
            height:fit-content;
            gap:1rem;
        }
        span{
            width:20px;
            background-color:#00AB9B;
            margin: 1.5rem 0;
            border-radius:50px;
        }
        h2{
            font-size:3rem;
            margin:0;
        }
        p{
            font-size:1.2rem;
            max-width:65%;
        }
        
    }
    .btn-1, .btn-2{
            background-color: #00AB9B;
            border:none;
            border-radius:20px;
            padding:1rem 1.5rem;
            color: #fff;
            font-weight:700;
            font-size:1.2rem;
            cursor: pointer;
        }
        .btn-2{
            display:none;
        }
    .circles{
        width:100%;
        height:100%;
        position:relative;
        right:0;
       img{
        height:100%;
        position:absolute;
       }
       .blue-circle{
        right:0;
       }
       .white-circle{
        right:0;
       }
    }
    .circle-pics{
        position:absolute;
        top:200px;
        left:200px;
        width:60%;
        img{
            width:100%;
        }
    }
    .why{
        background-image:url(${Why1}), url(${Why2});
        padding:6rem 0;
        margin:4rem 0;
    }
    .whycards{
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        gap:1rem;
        width:90%;
        flex-wrap:wrap;
        margin:0 auto;
    }
    .question-mark{
        display:flex;
        justify-content:center;
    }
    .whatcards{
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        align-items:center;
        gap:2rem;
        margin-top:4rem;
    }
    .single-whatcard{

    }
    .single-whatcard:nth-child(even){
        flex-direction:row-reverse;
        text-align:right;
    }
    .testimonial h2{
        font-size:1.5rem;
    }
    .join{
        background-image:url(${Join}),url(${Why2});
        background-size:cover;
        background-repeat:no-repeat;
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        color:#fff;
        position:relative;
        .group{
            position:absolute;
            width:10%;
            top:-40px;
            right:300px;
            img{
                width:100%;
                border:3px solid #00AB9B;
                border-radius:50%;
            }
        }
        button{
            background-color: #fff;
            color:#00AB9B;
            border:none;
            border-radius:20px;
            padding:1rem 1.5rem;
            font-weight:700;
            font-size:1.2rem;
            cursor: pointer;
        }
        img{
            width:100%;
        }
        .discover{
            display:flex;
            height:fit-content;
            gap:1rem;
        }
        span{
            width:5px;
            background-color:#fff;
            margin: 1.5rem 0;
            border-radius:50px;
        }
        p{
            line-height:2rem;
        }
    }
    .testimonials{
        background-image:url('../assets/images/why1.png');
        width:80%;
        margin:0 auto;
    }
    .box{
        width:100px;
        height:100px;
        background-color:purple;
        color:white;
        margin:1rem;
    }
    
    .slick-list{
        width:60%;
        margin:1rem auto;
    }
    /* .slick-track{
        height:500px;
    } */
    .box{
        background-color:blue;
        width:200px;
        height:300px;
        margin:1rem;
    }
    @media screen and (max-width:640px){
        .single-whatcard:nth-child(even){
        flex-direction:row;
        text-align:left;
        }
        .hero__images, .circles, .circle-pics{
            position:static;
        }
        .hero{
            height:max-content;
            padding:1rem;
        }
        .hero__text, .hero__cover, .hero__images{
            width:100%;
        }
        .hero__text{
            .discover{
                gap: 0.5rem;
                span{
                    width: 0.5rem;
                    margin:0;
                }
                h2{
                    font-size:1.5rem;
                }
            }
            P{
                max-width:100%;
                font-size:.8rem;
            }
        }
        .hero__text h2{
            font-size:1.8rem;
            text-align:left;
        }
        .btn-2{
            display:block;
        }
        .btn-1{
            display:none;
        }
        .btn-cover{
            width:100%;
            margin-top:10rem;
            display:flex;
            justify-content:center;
        }
        .circles{
            position:relative;
            img{
                width:100%;
                height:300px;
                z-index:-1;

            }
        }
        .circle-pics{
            /* img{
            z-index:99;} */
        }
        .hero__images{
            background:transparent;
        }
        .header{
            width:100%;
        }
        .why{
        background-image:url(${WhyDesktop}), url(${WhyDesktop2});
        padding:6rem 0;
        margin:4rem 0;
        h2{
            font-size:1.5rem;
            margin:3rem 0;
        }
        }
        .question{
            h2{
                font-size:1.5rem;
            }
        }
        .join{
            background-image:url(${MobileJoin});
            background-repeat:no-repeat;
            background-size:cover;
            background-position:center;
            padding:7rem 0;
            .join__text{
                margin:1rem;
            }
            .group{
                width:30%;
                top:10px;
                right:100px;
            }
            h2{
                text-align:left;
            }
            button{
                border-radius:5px;
                padding:.8rem 1rem;
                font-size:1rem;
            }
        }
        .slick-slider{
            display:block;
            overflow-y:hidden;
        }
        .slick-initialized{
            display:block;
        }
    }
`
export default HomeStyle