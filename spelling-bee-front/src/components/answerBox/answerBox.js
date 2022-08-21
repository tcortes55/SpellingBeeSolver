import React from 'react';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const AnswerListWrapper = styled.ul`
    max-width: 350px;
    text-align: left;
    padding-top: 10px;
    padding-left: 10px;
    margin-bottom: 20px;
`;

const AnswerItem = styled.li`
    width: 42%;
    font-size: calc(10px + 1vmin);
    text-align: left;
    display: inline-block;
    border-bottom: 1px solid;
    margin-right: 10px;
    margin-left: 10px;
`;

function AnswerBox({ words }) {
    return (
        <SimpleBar style={{maxHeight: "calc(100vh - 500px)"}} forceVisible="y" autoHide={false}>
            <AnswerListWrapper>
                {words.map((word, index) => {
                    return <AnswerItem key={"word_" + index}>{word}</AnswerItem>;
                })}
            </AnswerListWrapper>
        </SimpleBar>
    );
}

export default AnswerBox;