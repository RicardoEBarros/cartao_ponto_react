import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { TimeCardContext } from '../Context/TimeCardContext'

function ButtonNew() {

    const { handleClick } = useContext(TimeCardContext)

    return (
        <Button variant="contained" onClick={() => handleClick(true)}>Novo</Button>
    )
}

export default ButtonNew