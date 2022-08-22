import React, { useContext } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import columns from '../../utils/dialog/dialogGridConfig'
import {
    Box,
    Stack
} from '@mui/material'
import { DialogDataContext } from '../Context/DialogContext'

export default function TimeCardGridData() {

    const { rowsDialog } = useContext(DialogDataContext)

    return (
        <Box sx={{ width: "100%" }}>
            <Stack mt={2} direction="row" sx={{ height: "250px" }}>
                <DataGrid getRowId={(row) => row.id} rows={rowsDialog} columns={columns()} />
            </Stack>
        </Box>
    )

}