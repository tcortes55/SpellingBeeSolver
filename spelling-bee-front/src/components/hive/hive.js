import React from 'react';
import styled, { css } from 'styled-components';
import HiveCell from '../hiveCell/hiveCell';

const HiveWrapper = styled.div`
    background-color: purple;
    width: 400px;
    height: 400px;
`;

const HiveCellWrapper = styled.div`
    top: 50%;
    left: 50%;
    width: fit-content;
    position: absolute;
`;

function Hive({ letters }) {
    return (
        <HiveWrapper>
            <HiveCellWrapper style={{transform: "translate(-50%, -50%)"}}>
                <HiveCell isCenter={true}>{ letters[0] }</HiveCell>
            </HiveCellWrapper>
            <HiveCellWrapper style={{transform: "translate(-50%, -154%)"}}>
                <HiveCell isCenter={false}>{ letters[1] }</HiveCell>
            </HiveCellWrapper>
            <HiveCellWrapper style={{transform: "translate(105%, -102%)"}}>
                <HiveCell isCenter={false}>{ letters[2] }</HiveCell>
            </HiveCellWrapper>
            <HiveCellWrapper style={{transform: "translate(105%, 2%)"}}>
                <HiveCell isCenter={false}>{ letters[3] }</HiveCell>
            </HiveCellWrapper>
            <HiveCellWrapper style={{transform: "translate(-50%, 54%)"}}>
                <HiveCell isCenter={false}>{ letters[4] }</HiveCell>
            </HiveCellWrapper>
            <HiveCellWrapper style={{transform: "translate(-205%, 2%)"}}>
                <HiveCell isCenter={false}>{ letters[5] }</HiveCell>
            </HiveCellWrapper>
            <HiveCellWrapper style={{transform: "translate(-205%, -102%)"}}>
                <HiveCell isCenter={false}>{ letters[6] }</HiveCell>
            </HiveCellWrapper>
        </HiveWrapper>
    );
}

export default Hive;