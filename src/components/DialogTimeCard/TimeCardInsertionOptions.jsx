import React, { useState, useContext } from 'react'
import { useFormik } from 'formik'
import {
    MenuItem,
    TextField,
    Select,
    Grid,
    Button
} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TimeCardDataContext } from '../Context/TimeCardDataContext';

export default function TimeCardInsertionOptions() {

    const { setRow } = useContext(TimeCardDataContext)

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            type: 1,
            time: ''
        }
    })

    return (
        <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ display: "flex", alignItems: "end" }}>
                <Grid item xs={12} sm={12} md={4}>
                    <label htmlFor='type'>Tipo:</label>
                    <Select
                        name="type"
                        label="Tipo"
                        labelId='select-type'
                        value={values.type}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Início Expediente</MenuItem>
                        <MenuItem value={2}>Início Intervalo</MenuItem>
                        <MenuItem value={3}>Fim Intervalo</MenuItem>
                        <MenuItem value={4}>Fim Expediente</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <label htmlFor='time'>Hora:</label>
                    <TextField
                        name="time"
                        variant="outlined"
                        value={values.time}
                        onChange={handleChange}
                        placeholder="Informe a hora"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Button
                        sx={{ height: "55px" }}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        <AddCircleOutlineIcon />
                    </Button>
                </Grid>
            </Grid>
        </form>
    )

}