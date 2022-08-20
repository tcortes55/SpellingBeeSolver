import React from 'react';
import styled, { css } from 'styled-components';
import HiveCell from '../hiveCell/hiveCell';

const HiveWrapper = styled.div`
    background-color: purple;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 50px;
    padding-bottom: 50px;
`;

function Hive() {
    return (
        <HiveWrapper>
            <HiveCell isCenter={false}>A</HiveCell>
            <HiveCell isCenter={true}>T</HiveCell>
        </HiveWrapper>
    );
}

export default Hive;