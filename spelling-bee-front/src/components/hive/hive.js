import React from 'react';
import styled from 'styled-components';
import HiveCell from '../hiveCell';
import { Strings } from '../../constants';

const HiveWrapper = styled.div`
    width: 280px;
    height: 280px;
    position: relative;
`;

const HiveCellWrapper = styled.div`
    top: 50%;
    left: 50%;
    width: fit-content;
    position: absolute;
`;

function Hive({ responseLetters }) {
    let letters = responseLetters ? responseLetters : Strings.EmptyHive;

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