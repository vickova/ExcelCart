import styled from "styled-components";

const WhatCardStyle = styled.div`
    display:flex;
    justify-content:space-between;
    gap:4rem;
    @media screen and (max-width:640px){
        .what-icon{
            width:60%;
        }
        img{
            width: 100%;
        }
        p{
            color:#0A212D;
        }
    }
    @media screen and (max-width:640px){
        gap:1rem;
        margin:1rem;
        align-items:center;
        p{
            margin:0;
            font-size:.9rem;
        }
    }
`

export default WhatCardStyle