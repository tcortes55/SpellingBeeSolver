import React from 'react';
import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';

const LoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000004d;
    z-index: 999;
`;

function Loader() {
    return (
        <LoaderContainer>
            <TailSpin
                height="80"
                width="80"
                color="#000000"
                ariaLabel="tail-spin-loading"
                radius="0"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </LoaderContainer>
    );
}

export default Loader;