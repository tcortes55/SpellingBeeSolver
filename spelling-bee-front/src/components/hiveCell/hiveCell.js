import React from 'react';
import styled from 'styled-components';

const centerColor = '#f7da21';
const outerColor = '#e6e6e6';

const baseHeight = "76px";
const halfBaseHeight = "38px";
const baseWidth = "45px";
const halfBaseWidth = "22.5px";

const Hexagon = styled.div`
    height: ${baseHeight};
    width: ${baseWidth};
    background-color: ${ props => props.isCenter ? centerColor : outerColor };
    position: relative;
    color: black;

    &:before {
        content: " ";
        width: 0; height: 0;
        border-right: ${halfBaseWidth} solid ${ props => props.isCenter ? centerColor : outerColor };
        border-bottom: ${halfBaseHeight} solid transparent;
        border-top: ${halfBaseHeight} solid transparent;
        position: absolute;
        top: 0px;
        left: -${halfBaseWidth};
    }

    &:after {
        content: "";
        width: 0;
        position: absolute;
        right: -${halfBaseWidth};
        top: 0px;
        border-left: ${halfBaseWidth} solid ${ props => props.isCenter ? centerColor : outerColor };
        border-bottom: ${halfBaseHeight} solid transparent;
        border-top: ${halfBaseHeight} solid transparent;
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
    return (
        <Hexagon isCenter={isCenter}>
            <HexagonContet>
                { children }
            </HexagonContet>
        </Hexagon>
    )
}

export default HiveCell;