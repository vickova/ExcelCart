import styled from "styled-components";

const HeaderStyle = styled.header`
    background-color: #fff;
    .header{
    display:flex;
    justify-content:space-between;
    width:80%;
    margin: 1rem auto;
    .menu-cover{
        display:flex;
        justify-content:flex-end;
    }
    .menu{
        display:none;
    }
    nav{
        display:flex;
        justify-content:space-between;
        gap:2rem;
    }
    ul{
        display:flex;
        justify-content:space-between;
        gap:2rem;
        li{
            list-style:none;
        }
        a{
            text-decoration:none;
            color:#000;
        }
        li{
            font-size:1.2rem;
        }
        .active__link{
                    background-color:#00AB9B;
                    color:#fff;
                    padding: .5rem 1rem;
                    border-radius:50px;
                }
    }
    button{
        font-size:1.2rem;
        background-color:#00AB9B;
        border-radius:50px;
        padding:.8rem 1rem;
        border:none;
    }
    }
    @media screen and (max-width: 640px){
        .header{
            box-sizing:border-box;
            width:100%;
            padding: 0.5rem;
        .menu{
            display:block;
        }
        nav{
            display:block;
        }
        ul{
            display:${({menu})=>menu?'block':'none'};
            position:fixed;
            right:0;
            z-index:99;
            background-color:#fff;
            height:100%;
            li{
                margin:1rem 0;
                text-align:right;
            }
        }
        .logo{
            width:30%;
            img{
                width:100%;
            }
        }
    }
    }
`

export default HeaderStyle;