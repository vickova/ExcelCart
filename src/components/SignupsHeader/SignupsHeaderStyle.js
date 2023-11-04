import styled from "styled-components";

const SignupsHeaderStyle = styled.div`
/* padding:1rem; */
    nav{
        
        ul{
            padding:0;
            display:flex;
            justify-content:space-between;
            li{
                list-style:none;
                a{
                    text-decoration:none;
                    color:inherit;
                }
                .active__link{
                    background-color:#00AB9B;
                    color:#fff;
                    padding: .5rem 1rem;
                    border-radius:50px;
                }
            }
        }
    }
`

export default SignupsHeaderStyle;