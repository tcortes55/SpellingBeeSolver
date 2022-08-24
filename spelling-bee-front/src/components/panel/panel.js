import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AnswerBox from '../answerBox';
import Hive from '../hive';
import LettersForm from '../lettersForm';

function Panel({ gameResponse, settings }) {
    let isReady = true; //gameResponse.words != undefined;
    const testFunc = (txt) => console.log(txt);
    
    return (
        <>
            <Accordion defaultExpanded={settings.DefaultExpanded}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >
                    {settings.Title}
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Hive responseLetters={gameResponse.letters ? gameResponse.letters : "       "}></Hive>
                        {
                            gameResponse.awaitingUser ? <LettersForm handleSubmit={testFunc}></LettersForm>
                            : <AnswerBox words={gameResponse.words ? gameResponse.words : []}></AnswerBox>
                        }
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default Panel;