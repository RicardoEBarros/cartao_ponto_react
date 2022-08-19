import React, { useState, createContext } from 'react'

export const TimeCardContext = createContext({
    openDialog: false,
    handleClick: (state) => { }
})

const TimeCardProvider = ({ children }) => {

    const [openDialog, setOpenDialog] = useState(false)
    const handleClick = (state) => setOpenDialog(state)

    return (
        <TimeCardContext.Provider value={{ openDialog, handleClick }}>
            {children}
        </TimeCardContext.Provider>
    )
}

export default TimeCardProvider
