import styled from "styled-components";

const TestimonialStyle = styled.div`
    background-color:#fff;
    box-shadow: 1px 1px 5px 1px #cdcccc;
    margin:1rem;
    position:relative;
    padding: 2rem 1rem;
    border-radius:10px;
    
    img{
        width:80px;
        height:80px;
        position:absolute;
        top:-30px;
        left:100px;
        z-index:99;
    }
    @media screen and (max-width:640px){
        margin:1.5rem 0;
        img{
            left:45px;
        }
    }
`
export default TestimonialStyle