import styled from "styled-components";

const FooterStyle = styled.footer`
background-color:#0A0A0A;
color:#fff;
padding:2rem 4rem .5rem 4rem;
margin-top:6rem;
.icons{
    display:flex;
    justify-content:center;
    gap:2rem;
    margin:2rem 0;
}
.lists{
    display:flex;
    justify-content:space-between;
    margin-bottom:3rem;
}
ul{
    display:flex;
    padding:0;
    gap:1rem;
}
li{
    list-style:none;
}
p{
    text-align:center;
}
@media screen and (max-width:640px){
    padding:1rem;
    ul{
        display:block;
        li{
            margin:1rem 0;
        }
    }
}
`

export default FooterStyle