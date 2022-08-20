import React from 'react';
import styled, { css } from 'styled-components';
import AnswerBox from '../answerBox/answerBox';
import Hive from '../hive';

function Panel({ gameResponse }) {
    return (
        <div>
            <Hive letters={gameResponse.letters}></Hive>
            <AnswerBox words={gameResponse.words}></AnswerBox>
        </div>
    );
}

export default Panel;