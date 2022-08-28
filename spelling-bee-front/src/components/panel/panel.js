import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AnswerBox from '../answerBox';
import Hive from '../hive';
import { Strings } from '../../constants';

const AccordionContainer = styled.div`
    width: 280px;
`;

function Panel({ gameResponse, settings, currentPanel, handleChange, children }) {
    let isExpanded = settings.Title === currentPanel;

    return (
        <>
            <Accordion
                defaultExpanded={settings.DefaultExpanded}
                expanded={isExpanded}
                onChange={handleChange(settings.Title)}
            >
                    <AccordionSummary
                        expandIcon={
                            isExpanded ? <div></div> : <ExpandMoreIcon /> 
                        }
                        aria-controls="panel1a-content"
                    >
                        {settings.Title}
                    </AccordionSummary>
                    <AccordionDetails>
                        <AccordionContainer>
                            <Hive responseLetters={gameResponse.letters ? gameResponse.letters : Strings.EmptyHive}></Hive>
                            <AnswerBox words={gameResponse.words ? gameResponse.words : []}></AnswerBox>
                            {children}
                        </AccordionContainer>
                    </AccordionDetails>
            </Accordion>
        </>
    );
}

export default Panel;