import React from 'react'
import styled from 'styled-components'
import BodyComponent from '../components/BodyComponent';
import SearchBar from '../components/SearchBar'

const Container = styled.div`
    padding: 50px 40px;
`;
function MainPage() {
    
    return (
        <Container>
            <SearchBar/>
            <BodyComponent/>
        </Container>
    )
}

export default MainPage
