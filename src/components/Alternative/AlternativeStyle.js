import styled from "styled-components";

const AlternativeStyle = styled.div`
p{
    font-size:.8rem;
    text-align:center;
    span{
        color:#00AB9B;
    }
}
p:first-child{
    font-weight:700;
}
.signup{
    margin:2rem 0;
    color:#8B8B8B;
}
.signup a{
    text-decoration:none;
}
.button{
    display:flex;
    justify-content:space-between;
    align-items:center;
    button{
        font-size:.6rem;
        padding:0;
        border:1px solid #00AB9B;
        border-radius:5px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:.3rem;
        padding:.5rem .3rem;
        background-color:transparent;
        color:#263238;
    }
}

`

export default AlternativeStyle;