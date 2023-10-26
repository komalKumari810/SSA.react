import React from 'react';
import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    border-radius: 2px;
    width: 100%;
    height: 30%;
    margin-left: 10px;
    display: flex;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`
const SearchIconWrapper = styled(Box)`
    padding: 5px;
`

const Search = () => {
    return (
        <SearchContainer>
           <InputSearchBase
             placeholder='Search for Company Name'
           />
           <SearchIconWrapper>
            <SearchIcon />
           </SearchIconWrapper>
        </SearchContainer>
    )
}

export default Search;