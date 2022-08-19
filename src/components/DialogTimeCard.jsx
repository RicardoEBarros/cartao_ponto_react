import React, { useState, useContext } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import {
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle,
    MenuItem,
    TextField,
    Icon,
} from '@mui/material'
import { TimeCardContext } from './Context/TimeCardContext'

export default function DialogTimeCard() {

    const [timeCardType, setTimeCardType] = useState('1')
    const [time, setTime] = useState('')
    const { openDialog, handleClick } = useContext(TimeCardContext)

    const handleTimeCardType = (event) => {
        setTimeCardType(event.target.value)
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="sm"
            open={openDialog}
            onClose={() => handleClick(false)}
        >
            <DialogTitle>Novo Ponto</DialogTitle>
            <DialogContent>
                <Select
                    className='new-card-entry'
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
                <TextField
                    className='new-card-entry'
                    variant="outlined"
                    value={time}
                ></TextField>
                <Button
                    className='new-card-entry'
                    variant="contained"
                    color="primary">
                </Button>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' color="error" onClick={() => handleClick(false)}>Fechar</Button>
                <Button variant='contained' color="success">Salvar</Button>
            </DialogActions>
        </Dialog>
    )
}