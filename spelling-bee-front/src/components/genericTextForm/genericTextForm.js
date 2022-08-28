import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
                <Button variant="contained" onClick={() => handleSubmit(textValue)} fullWidth>SUBMIT</Button>
            </div>
        </div>
    );
}

export default GenericTextForm;