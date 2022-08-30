import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ButtonWrapper from '../buttonWrapper';
import styled from 'styled-components';

function GenericTextForm({formLabel, handleSubmit}) {
    const [textValue, setTextValue] = useState("");

    const onTextChange = (e) => setTextValue(e.target.value);

    return (
        <div>
            <div>
                <TextField label={formLabel} focused onChange={onTextChange} value={textValue} fullWidth></TextField>
            </div>
            <div>
                <ButtonWrapper variant="contained" onClick={() => handleSubmit(textValue)} fullWidth>SUBMIT</ButtonWrapper>
            </div>
        </div>
    );
}

export default GenericTextForm;