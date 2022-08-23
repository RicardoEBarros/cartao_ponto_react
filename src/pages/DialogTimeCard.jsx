import React, { useContext } from 'react'
import { TimeCardContext } from '../components/Context/TimeCardContext'
import TimeCardInsertionOptions from '../components/DialogTimeCard/TimeCardInsertionOptions'
import TimeCardGridData from '../components/DialogTimeCard/TimeCardGridData'
import { DialogDataContext } from '../components/Context/DialogContext'
import { TimeCardDataContext } from '../components/Context/TimeCardDataContext'
import { getCurrentDateTime } from '../utils/date'
import {
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle
} from '@mui/material'
import { getNextId } from '../utils/index/gridConfig'

export default function DialogTimeCard() {

    const { openDialog, handleClick } = useContext(TimeCardContext)
    const { rowsDialog, setRowsDialog } = useContext(DialogDataContext)
    const { rowsIndex, setRowsIndex } = useContext(TimeCardDataContext)

    const handleSubmit = () => {
        let newRow = [...rowsDialog]

        let newTimeCard = newRow.reduce((acc, currentValue) => {

            switch (currentValue.typeId) {
                case 2:
                    acc = { ...acc, start_interval: currentValue['time'] }
                    break
                case 3:
                    acc = { ...acc, end_interval: currentValue['time'] }
                    break
                case 4:
                    acc = { ...acc, end_office: currentValue['time'] }
                    break
                default:
                    acc = { ...acc, start_office: currentValue['time'] }
                    break
            }

            return acc
        }, {})

        setRowsIndex([...rowsIndex, { ...newTimeCard, id: getNextId(rowsIndex), date_time: getCurrentDateTime() }])
        setRowsDialog([])
        handleClick(false)
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
                <TimeCardInsertionOptions />
                <TimeCardGridData />
            </DialogContent>
            <DialogActions>
                <Button variant='contained' color="error" onClick={() => handleClick(false)}>Fechar</Button>
                <Button variant='contained' color="success" onClick={handleSubmit}>Salvar</Button>
            </DialogActions>
        </Dialog>
    )
}