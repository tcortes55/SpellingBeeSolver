import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';

function LettersForm() {
    const [textValue, setTextValue] = useState("");

    const onTextChange = (e) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);

    return (
        <div>
            <TextField label={"Type 7 letters (center letter first!)"} focused onChange={onTextChange} value={textValue}></TextField>
            <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
        </div>
    );
}

export default LettersForm;