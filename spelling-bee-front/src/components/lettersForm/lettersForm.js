import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';

function LettersForm({formLabel, handleSubmit}) {
    const [textValue, setTextValue] = useState("");

    const onTextChange = (e) => setTextValue(e.target.value);

    return (
        <div>
            <TextField label={formLabel} focused onChange={onTextChange} value={textValue}></TextField>
            <Button variant="contained" onClick={() => handleSubmit(textValue)}>SUBMIT</Button>
        </div>
    );
}

export default LettersForm;