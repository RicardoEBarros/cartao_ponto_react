import React, { useState, useContext } from 'react'
import { TimeCardContext } from './Context/TimeCardContext'
import {
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle,
    Stack
} from '@mui/material'
import TimeCardInsertionOptions from './DialogTimeCard/TimeCardInsertionOptions'
import TimeCardGridData from './DialogTimeCard/TimeCardGridData'

export default function DialogTimeCard() {

    const { openDialog, handleClick } = useContext(TimeCardContext)

    return (
        <Dialog
            fullWidth={true}
            maxWidth="sm"
            open={openDialog}
            onClose={() => handleClick(false)}
        >
            <DialogTitle>Novo Ponto</DialogTitle>
            <DialogContent>
                <TimeCardInsertionOptions />
                <TimeCardGridData />
            </DialogContent>
            <DialogActions>
                <Button variant='contained' color="error" onClick={() => handleClick(false)}>Fechar</Button>
                <Button variant='contained' color="success">Salvar</Button>
            </DialogActions>
        </Dialog>
    )
}