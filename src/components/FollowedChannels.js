import React from 'react'
import styled from 'styled-components';
import { BiArrowFromRight } from 'react-icons/bi';


const FollowedChannels = () => {
    return (
        <LeftSideBar>
            <Container>
                <Header>
                    <h5>Canales que sigo</h5>
                    <IconButton>
                        <BiArrowFromRight />
                    </IconButton>
                </Header>
            </Container>
        </LeftSideBar>
    )
}

export default FollowedChannels;

const LeftSideBar = styled.aside`
    height: calc(100vh - 50px);
    position: relative;
    top: 13px;
    left: 0;
    z-index: 0;
    width: 240px;
    background-color: #1f1f23;
    color: white;
    display: block;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;

`;

const Header = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5{
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1.5;
    }
`;

const IconButton = styled.button`
    position: relative;
    z-index: 2;
    background-color: transparent;
    color: white;
    text-decoration: none;
    border: none;
    font-size: 22px;
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