import React from 'react';
import styled, { css } from 'styled-components';

function AnswerBox({ words }) {
    return (
        <div>
            {words.map((word, index) => {
                return <p key={"word_" + index}>{word}</p>;
            })}
        </div>
    );
}

export default AnswerBox;