import React from 'react'
import styled from 'styled-components';

const Home = () => {
    return (
        <Container>
            <h1>Home</h1>
        </Container>
    )
}

export default Home;

const Container = styled.main`
    width: 100%;
    position: relative;
    top:50px;
    left: 240px;
    display: block;
`;