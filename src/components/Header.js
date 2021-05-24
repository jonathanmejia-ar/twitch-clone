import React from 'react'
import styled from 'styled-components';

const Header = () => {
    return (
        <Nav>
            <Logo>
                <img src="/images/twitch.svg" alt="twitch-logo" />
            </Logo>
            <NavMenu>
                <Wraper>
                    <a>
                        <p>Siguiendo</p>
                    </a>
                </Wraper>
                <Wraper>
                    <a>
                        Explorar
                </a>
                </Wraper>
                <Divider>

                </Divider>
                <Wraper>
                    <a>
                        Esports
                </a>
                </Wraper>
                <Wraper>
                    <a>
                        Música
                </a>
                </Wraper>
                <BtnWrapper>
                    <Button>
                        ...
                    </Button>
                </BtnWrapper>
            </NavMenu>
            <Search>
                <input placeholder="Buscar" />
            </Search>
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
    height: 50px;
    width: 100%;
    position: fixed;
    background-color: #18181b;
    display: flex;
    align-items: center;
    //justify-content: space-between;
    color: white;
`;

const Logo = styled.div`
    padding: 10px;

    img{
        width: 30px;
        height: 30px;
        border-radius: 4px;
    }
`;

const NavMenu = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`;

const Wraper = styled.div`
    padding: 0 20px;
    
    a{     
        font-size: 17px;
        font-weight: 600;
    }
    a:hover {
        cursor: pointer;
        color: #a970ff;
    }
`;

const Button = styled.button`  
    background-color: transparent;
    color: white;
    text-decoration: none;
    border: none;
    padding: 1px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 4px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;    

    :hover{
        cursor: pointer;
        color: #a970ff;
        background-color: #464648;
    }
`;

const BtnWrapper = styled.div`
    padding: 0 10px;

`;


const Divider = styled.div`
    border-left: 1px solid #2f2f32;
    height: 65%;
`;

const Search = styled.div`
    padding: 0 10px;
    width: 350px;

    input{
        width: 100%;
        padding: 10px 10px;
        border-radius: 4px;
        background-color: #464648;
        appearance: none;
        outline: none;
        border: 0;
        color: white;
    }
`;