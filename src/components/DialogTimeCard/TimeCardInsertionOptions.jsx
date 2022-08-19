import React, { useState } from 'react'
import {
    MenuItem,
    TextField,
    Select,
    Grid,
    Button
} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function TimeCardInsertionOptions() {

    const [timeCardType, setTimeCardType] = useState('1')
    const [time, setTime] = useState('')
    const handleTimeCardType = (event) => setTimeCardType(event.target.value)

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
                <Select
                    label="Tipo"
                    labelId='select-type'
                    value={timeCardType}
                    onChange={handleTimeCardType}
                >
                    <MenuItem value={1}>Início Expediente</MenuItem>
                    <MenuItem value={2}>Início Intervalo</MenuItem>
                    <MenuItem value={3}>Fim Intervalo</MenuItem>
                    <MenuItem value={4}>Fim Expediente</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <TextField
                    variant="outlined"
                    value={time}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Button
                    sx={{ height: "100%" }}
                    variant="contained"
                    color="primary"
                >
                    <AddCircleOutlineIcon />
                </Button>
            </Grid>
        </Grid>
    )
}