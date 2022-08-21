import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AnswerBox from '../answerBox/answerBox';
import Hive from '../hive';

function Panel({ gameResponse, defaultExpanded }) {
    return (
        <Accordion defaultExpanded={defaultExpanded}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
            >
                Self
            </AccordionSummary>
            <AccordionDetails>
                <div>
                        <Hive letters={gameResponse.letters}></Hive>
                        <AnswerBox words={gameResponse.words}></AnswerBox>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

export default Panel;