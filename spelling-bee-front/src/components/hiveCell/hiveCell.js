import React from 'react';
import styled, { css } from 'styled-components';

const Hexagon = styled.div`
    margin-top: 30px;
    height: 104px;
    width: 60px;
    background-color: #6C6;
    position: relative;

    &:before {
        content: " ";
        width: 0; height: 0;
        border-right: 30px solid #6C6;
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
        border-left: 30px solid #6C6;
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

function HiveCell({ children }) {
    return (
        <div>
            <Hexagon>
                <HexagonContet>
                    { children }
                </HexagonContet>
            </Hexagon>
        </div>
    )
}

export default HiveCell;