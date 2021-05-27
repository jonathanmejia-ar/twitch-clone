import React from 'react'
import styled from 'styled-components';
import { BiComment, BiCrown, BiDiamond, BiDotsHorizontalRounded } from 'react-icons/bi';
import { RiInboxLine } from "react-icons/ri";

const Header = () => {

    return (
        <Nav>
            <NavMenu>
                <Logo>
                    <img src="/images/twitch.svg" alt="twitch-logo" />
                </Logo>
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
                    <IconButton>
                        <BiDotsHorizontalRounded />
                    </IconButton>
                </BtnWrapper>
            </NavMenu>
            <Search>
                <input placeholder="Buscar" />
            </Search>
            <UserMenu>
                <BtnWrapper>
                    <IconButton>
                        <BiCrown />
                        <PrimeNotification>
                            33
                        </PrimeNotification>
                    </IconButton>
                </BtnWrapper>
                <BtnWrapper>
                    <IconButton>
                        <RiInboxLine />
                    </IconButton>
                </BtnWrapper>
                <BtnWrapper>
                    <IconButton>
                        <BiComment />
                    </IconButton>
                </BtnWrapper>
                <BtnWrapper>
                    <BitsIconButton>
                        <BiDiamond />
                    </BitsIconButton>
                    <BitsButton>
                        <Icon>
                            <BiDiamond />
                        </Icon>
                        Comprar Bits
                    </BitsButton>
                </BtnWrapper>
                <Avatar>
                    <img src="/images/avatar1.jpg" alt="avatar" />
                    <AvatarPresence />
                </Avatar>
            </UserMenu>
        </Nav>
    )
};

export default Header;

const Nav = styled.nav`
    height: 50px;
    width: 100%;
    position: fixed;
    background-color: #18181b;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    box-shadow: 0 1px 2px rgba(0,0,0,0.9),0 0px 2px rgba(0,0,0,0.9);
    z-index: 10;
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
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-right: auto;
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

    @media (max-width: 1440px){
        padding: 0 10px;

        a{     
            font-size: 13px;
            font-weight: 600;
        }

        a:hover {
            cursor: pointer;
            color: #a970ff;
        }
    }
`;

const IconButton = styled.button`
    position: relative;
    z-index: 2;
    background-color: transparent;
    color: white !important;
    text-decoration: none;
    border: none;
    font-size: 18px;
    font-weight: bold;
    border-radius: 4px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;    

    &:hover{
        cursor: pointer;
        color: #a970ff;
        background-color: #464648;
    }
`;

const BtnWrapper = styled.div`
    padding: 0 5px;

`;


const Divider = styled.div`
    border-left: 1px solid #2f2f32;
    height: 65%;
`;

const Search = styled.div`
    padding: 7px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    input{
        width: 100%;
        max-width: 355px;
        padding: 10px 10px;
        border-radius: 4px;
        background-color: #464648;
        appearance: none;
        outline: none;
        border: 0;
        color: white;
    }
`;

const UserMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
`;

const Avatar = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 10px;
    z-index: 2;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;     
    }
`;

const Button = styled.button`
    color: white;
    background-color: #3a3a3d;
    text-decoration: none;
    padding: 7px;
    border: none;
    font-size: 13px;
    font-weight: bold;
    border-radius: 4px;
    display: flex;
    align-items: center;

    &:hover{
        cursor: pointer;
        background-color: #464648;
    }
`;

const Icon = styled.div`
    margin-right: 5px;
    line-height: 10px;
`;

const BitsIconButton = styled(IconButton)`
    @media (max-width: 1024px){
        display: flex;
    }
    @media (min-width: 1025px){
        display: none;
    }
`;

const BitsButton = styled(Button)`
    @media (min-width: 1024px){
        display: flex;
    }
    @media (max-width: 1024px){
        display: none;
    }
`;

const PrimeNotification = styled.div`
    width: 23px;
    height: 23px;
    padding: 0.1rem;
    position: absolute;
    top: -6px;
    right: -6px;
    z-index: 3;
    border-radius: 9000px;
    background-color: red;
    color: white;
    font-size: 14px;
    border: 2px solid #18181b;

`;

const AvatarPresence = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 9px;
    height: 9px;
    z-index: 3;
    background-color: #00f593;
    border-radius: 50%;
    border: 1px solid #18181b;
`;