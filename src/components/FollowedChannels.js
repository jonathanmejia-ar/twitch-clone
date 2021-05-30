import React from 'react';
import styled from 'styled-components';
import { BiArrowFromRight, BiHeart } from 'react-icons/bi';
import { FiUsers } from "react-icons/fi";

const followed = new Array(10).fill(7);

const FollowedChannels = ({ collapseFollowers, setCollapseFollowers }) => {

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
                        followed.map((channel, index) => {
                            return (
                                <Channel key={index}>
                                    <Avatar>
                                        <img src="/images/channel.png" alt="avatar" />
                                    </Avatar>
                                    <ChannelInfo show={collapseFollowers}>
                                        <ChannelName>
                                            TwitchUser
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
                <ShowMore show={collapseFollowers}>
                    <a href="# ">
                        Mostrar más
                    </a>
                    <a href="# ">
                        Mostrar menos
                    </a>
                </ShowMore>
                <AddFriends show={collapseFollowers}>
                    <input placeholder="Añadir amigos" />
                </AddFriends>
                <FriendsOnline show={collapseFollowers}>
                    <FiUsers />
                </FriendsOnline>
            </Container>
        </LeftSideBar>
    )
};

export default FollowedChannels;

const LeftSideBar = styled.aside`
    height: calc(100vh - 50px);
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 1;
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
    //margin-top: 10px;
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

const ShowMore = styled.div`
    padding: 10px;
    display: ${({ show }) => show ? 'flex' : 'none'};
    justify-content: space-between;

    a{
        font-size: 12px;
        color: #a970ff;
    }

    a:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;

const AddFriends = styled.div`
    width: 100%;
    padding: 10px;
    position: absolute;
    bottom: 0;
    display: ${({ show }) => show ? 'block' : 'none'};
    border-top: 1px solid #2f2f32;

    input{
        width: 100%;
        height: 30px;
        padding: 5px 10px 5px 10px;
        border-radius: 4px;
        background-color: #464648;
        appearance: none;
        outline: none;
        border: 0;
        color: white;
    }
`;

const FriendsOnline = styled.div`
    width: 100%;
    padding: 10px;
    position: absolute;
    bottom: 0;
    display: ${({ show }) => show ? 'none' : 'flex'};
    justify-content: center;
    border-top: 1px solid #2f2f32;
    align-items: center;
    font-size: 20px;
`;