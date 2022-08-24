import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AnswerBox from '../answerBox';
import Hive from '../hive';
import { Strings } from '../../constants';

function Panel({ gameResponse, settings, children }) {
    
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
                        <Hive responseLetters={gameResponse.letters ? gameResponse.letters : Strings.EmptyHive}></Hive>
                            {children}
                            <AnswerBox words={gameResponse.words ? gameResponse.words : []}></AnswerBox>
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default Panel;