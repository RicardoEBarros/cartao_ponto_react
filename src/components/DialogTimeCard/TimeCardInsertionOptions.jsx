import React, { useState, useContext, useRef } from 'react'
import { useFormik } from 'formik'
import {
    MenuItem,
    TextField,
    Select,
    Grid,
    Button
} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { basicSchema } from '../../schemas/dialog';
import '../../css/style.css'
import { timeCardTypes, getTimeCardType } from '../../utils/dialog/timeCardTypes';
import { DialogDataContext } from '../Context/DialogContext';

export default function TimeCardInsertionOptions() {

    const rowId = useRef(1)
    const { rowsDialog, setRowsDialog } = useContext(DialogDataContext)

    const onSubmit = (values, actions) => {
        setRowsDialog([...rowsDialog, {
            ...values, id: rowId.current, typeName: getTimeCardType(values)
        }])
        rowId.current = rowId.current + 1
        actions.resetForm()
    }

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            id: 0,
            typeId: 0,
            typeName: '',
            time: ''
        },
        validationSchema: basicSchema(rowsDialog),
        onSubmit
    })

    return (
        <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ display: "flex", alignItems: "end" }}>
                <Grid item xs={12} sm={12} md={4}>
                    <label htmlFor='type' className="label-font">Tipo:</label>
                    <Select
                        sx={{ width: "100%" }}
                        name="typeId"
                        label="Tipo"
                        labelId='select-type'
                        value={values.typeId}
                        onChange={handleChange}
                        className={errors.typeId && touched.typeId ? "input-error" : ""}
                    >
                        <MenuItem value={0} key={0}>Selecione o Tipo</MenuItem>
                        {timeCardTypes.map(type => {
                            return <MenuItem value={type.index} key={type.index}>{type.name}</MenuItem>
                        })}
                    </Select>
                    {errors.typeId && touched.typeId && <p className="error label-font">{errors.typeId}</p>}
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <label htmlFor='time' className="label-font">Hora:</label>
                    <TextField
                        name="time"
                        variant="outlined"
                        value={values.time}
                        onChange={handleChange}
                        placeholder="Informe a hora"
                        className={errors.time && touched.time ? "input-error" : ""}
                    />
                    {errors.time && touched.time && <p className="error label-font">{errors.time}</p>}
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
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