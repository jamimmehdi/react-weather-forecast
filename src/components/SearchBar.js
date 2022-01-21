import React from 'react';
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 480px) { 
        flex-direction: column;
}
`;

const Logo = styled.div`
    flex: 2;
    font-size: 28px;
    font-weight: 900;
`;

const SearchBox = styled.div`
    flex: 4;
    height: 40px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 480px) { 
        margin-top: 30px;
        height: 50px;
    }
`;

const InputContainer = styled.div`
    height: 100%;
    padding: 0 0 0 10px;
    width: fit-content;
    background-color: #1e1d46;
    display: flex;
    align-items: center;
    border-radius: 10px;
    @media only screen and (max-width: 480px) { 
        height: 50px;
        width: 100%;
    }
`;

const SearchInput = styled.input.attrs({
    type: "text",
    placeholder: "Search city..."
})`
    border: none;
    color: #fff;
    width: 300px;
    background-color: transparent;
    @media only screen and (max-width: 480px) { 
        width: 250px;
        font-size: 17px;
        &::-webkit-input-placeholder {
            font-size: 16px;
       }
    }
    &::-webkit-input-placeholder {
        opacity: 0.5;
        color: #fff;
   }
    &:focus{
        outline: none;
    }
`;
const SearchButton = styled.button`
    height: 100%;
    width: 100px;
    border: none;
    color: #e1e1e1;
    font-weight: 700;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    &:hover {
        transform: scale(1.2);
    }
    @media only screen and (max-width: 480px) { 
        font-size: 14px;
        margin-right: 10px;
    }
    
`;

export default function SearchBar() {
    return (
        <div className='containerSearch'>
            <div className='searchWrapper'>
                <div className='logo'>Weather Forecast</div>
                <div className='searchBox'>
                    <div className='inputContainerSearch'>
                        <input className='searchInput' id='city' placeholder='Search city...' /><button className='SearchButton' id='submit'><SearchIcon style={{ fontSize: 18, margin: "0 5px 0 5px", fontWeight: 400 }} />Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
