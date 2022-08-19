import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import columns from '../../utils/dialog/dialogGridConfig'
import {
    Box,
    Stack
} from '@mui/material'

export default function TimeCardGridData() {

    const [rows, setRows] = useState([])

    return (
        <Box sx={{ width: "100%" }}>
            <Stack mt={2} direction="row" sx={{ height: "250px" }}>
                <DataGrid rows={rows} columns={columns()} />
            </Stack>
        </Box>
    )

}