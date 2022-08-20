import React from 'react';
import styled, { css } from 'styled-components';

const AnswerBoxWrapper = styled.div`
    margin-right: 0;
    font-size: 1em;
    overflow-x: hidden;
    overflow-y: scroll;
    height: calc(100vh - 500px);
`;

const AnswerListWrapper = styled.ul`
    max-width: 400px;
    text-align: left;
`;

const AnswerItem = styled.li`
    width: 40%;
    font-size: calc(10px + 1vmin);
    text-align: left;
    display: inline-block;
`;

function AnswerBox({ words }) {
    return (
        <AnswerBoxWrapper>
            <AnswerListWrapper>
                {words.map((word, index) => {
                    return <AnswerItem key={"word_" + index}>{word}</AnswerItem>;
                })}
            </AnswerListWrapper>
        </AnswerBoxWrapper>
    );
}

export default AnswerBox;