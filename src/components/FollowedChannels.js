import React, { useState } from 'react'
import styled from 'styled-components';
import { BiArrowFromRight, BiHeart } from 'react-icons/bi';

const followers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const FollowedChannels = () => {
    const [collapseFollowers, setCollapseFollowers] = useState(false);

    return (
        <LeftSideBar show={collapseFollowers}>
            <Container>
                <Header show={collapseFollowers}>
                    {collapseFollowers ? (<h5>Canales que sigo</h5>) : (<BiHeart />)}
                    <IconButton onClick={() => setCollapseFollowers(!collapseFollowers)}>
                        <BiArrowFromRight style={{ transform: collapseFollowers ? 'rotate(0deg)' : 'rotate(180deg)' }} />
                    </IconButton>
                </Header>
                <Channels>
                    {
                        followers.map((channel, index) => {
                            return (
                                <Channel key={index}>
                                    <Avatar>
                                        <img src="/images/channel.png" alt="avatar" />
                                    </Avatar>
                                    <ChannelInfo show={collapseFollowers}>
                                        <ChannelName>
                                            Jonathan
                                        </ChannelName>
                                        <Category>
                                            Grand Theft Auto 5
                                        </Category>
                                    </ChannelInfo>
                                    <ViewersInfo show={collapseFollowers}>
                                        <Status />
                                        <Viewers>
                                            112.999
                                        </Viewers>
                                    </ViewersInfo>
                                </Channel>
                            )
                        })
                    }
                </Channels>
            </Container>
        </LeftSideBar>
    )
};

export default FollowedChannels;

const LeftSideBar = styled.aside`
    height: calc(100vh - 67px);
    position: relative;
    top: 3px;
    left: 0;
    z-index: 0;
    width: 240px;
    width: ${({ show }) => show ? '240px' : '50px'};
    transition: width 0.2s;
    background-color: #1f1f23;
    color: white;
    display: block;
    
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Header = styled.div`
    margin-top: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: ${({ show }) => show ? 'space-between' : 'center'};
    flex-wrap: ${({ show }) => show ? 'nowrap' : 'wrap-reverse'};  
    height: ${({ show }) => show ? '' : '80px'};

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
    color: white !important;
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

const Channels = styled.div`
    width: 100%;
`;

const Channel = styled.div`
    width: 100%;
    padding: 5px 10px;
    position: relative;
    height: 42px;
    display: flex;
    align-items: center;

    &:hover{
        cursor: pointer;
        background-color: #303036;
    }
`;

const Avatar = styled.div`
   width: 30px;
   height: 100%;

    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`;

const ChannelInfo = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 10px;
    display: ${({ show }) => show ? 'flex' : 'none'};
    flex-direction: column;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    
`;

const ChannelName = styled.p`
    font-size: 14px;
    font-weight: bold;
`;

const Category = styled.p`
    width: 100%;
    font-size: 13px;
    font-weight: 400;
    color: #adadb8;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const ViewersInfo = styled.div`
    position: relative;
    padding: 0 5px;
    display: flex;
    align-items: center;
    margin-left: 5px;
    justify-items: flex-end;
    display: ${({ show }) => show ? 'flex' : 'none'};
`;

const Status = styled.div`
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    border: 1px solid #18181b;
    margin-right: 4px;
`;

const Viewers = styled.div`
    font-size: 13px;
`;
