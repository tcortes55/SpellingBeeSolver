import React from 'react';
import styled, { css } from 'styled-components';

const centerColor = '#edc100'
const outerColor = '#fffa9e'

const Hexagon = styled.div`
    height: 104px;
    width: 60px;
    background-color: ${ props => props.isCenter ? centerColor : outerColor };
    position: relative;
    color: black;

    &:before {
        content: " ";
        width: 0; height: 0;
        border-right: 30px solid ${ props => props.isCenter ? centerColor : outerColor };
        border-bottom: 52px solid transparent;
        border-top: 52px solid transparent;
        position: absolute;
        top: 0px;
        left: -30px;
    }

    &:after {
        content: "";
        width: 0;
        position: absolute;
        right: -30px;
        top: 0px;
        border-left: 30px solid ${ props => props.isCenter ? centerColor : outerColor };
        border-bottom: 52px solid transparent;
        border-top: 52px solid transparent;
    }
`;

const HexagonContet = styled.div`
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`;

function HiveCell({ children, isCenter }) {
    console.log(isCenter)
    return (
        <div>
            <Hexagon isCenter={isCenter}>
                <HexagonContet>
                    { children }
                </HexagonContet>
            </Hexagon>
        </div>
    )
}

export default HiveCell;