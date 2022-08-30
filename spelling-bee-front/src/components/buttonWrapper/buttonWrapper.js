import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 10px;
`;

function ButtonWrapper(props) {
    return (
        <Wrapper>
            <Button {...props}></Button>
        </Wrapper>
    );
}

export default ButtonWrapper;