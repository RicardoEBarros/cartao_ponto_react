import React, { useState, useContext } from 'react'
import { Stack } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { TimeCardDataContext } from '../components/Context/TimeCardDataContext'
import { columns } from '../utils/index/gridConfig'

export default function TimeCardGridDataIndex() {

    const { rowsIndex } = useContext(TimeCardDataContext)

    return (
        <Stack mt={2} sx={{
            width: "100%",
            height: "400px"
        }}>
            <DataGrid rows={rowsIndex} columns={columns()} />
        </Stack>
    )
}