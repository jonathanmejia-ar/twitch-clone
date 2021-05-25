import React from 'react'
import styled from 'styled-components';
import { BiArrowFromRight } from 'react-icons/bi';

const followers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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
                <Channels>
                    {
                        followers.map((channel, index) => {
                            return (
                                <Channel key={index}>
                                    <Avatar>
                                        <img src="/images/channel.png" alt="avatar" />
                                    </Avatar>
                                    <ChannelInfo>
                                        <ChannelName>
                                            Jonathan
                                        </ChannelName>
                                        <Category>
                                            Grand Theft Auto 5
                                        </Category>
                                    </ChannelInfo>
                                    <ViewersInfo>
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
    display: flex;
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
