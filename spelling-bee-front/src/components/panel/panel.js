import React from 'react';
import styled, { css } from 'styled-components';
import AnswerBox from '../answerBox/answerBox';
import Hive from '../hive';

function Panel() {
    const words = [];
    words.push("Word");
    words.push("Example");
    words.push("Times");
    return (
        <div>
            <Hive letters={"AOCGTIE"}></Hive>
            <AnswerBox words={words}></AnswerBox>
        </div>
    );
}

export default Panel;